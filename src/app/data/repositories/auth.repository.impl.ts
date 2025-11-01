import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiData } from '../sources/remote/api.data';
import { Result } from '../../core/model/result';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { LoginResponse } from '../model/login.response';
import { LoginRequest } from '../model/login.request';
import { HttpContext, HttpHeaders } from '@angular/common/http';
import { NO_TOKEN } from '../interceptors/token.interceptor';
import { TokenData } from '../sources/local/token.data';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly apiData: ApiData,
    private readonly tokenData: TokenData
  ) {}

  login(body: LoginRequest): Observable<Result<LoginResponse>> {
    return this.apiData.post<LoginResponse>(
      "/login", 
      body, 
      {
        context: new HttpContext().set(NO_TOKEN, true)
      }
    );
  }

  refreshToken(): Observable<Result<LoginResponse>> {
    return this.apiData.post<LoginResponse>(
      "/refresh-token", 
      null, 
      {
        context: new HttpContext().set(NO_TOKEN, true),
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenData.refresh_token}`)
      }
    );
  }

}
