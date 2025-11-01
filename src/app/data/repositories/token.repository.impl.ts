import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from '../sources/remote/api.data';
import { Result } from '../../core/model/result';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { LoginResponse } from '../model/login.response';
import { LoginRequest } from '../model/login.request';
import { TokenRepository } from '../../domain/repositories/token.repository';
import { TokenData } from '../sources/local/token.data';

@Injectable({
  providedIn: 'root'
})
export class TokenRepositoryImpl implements TokenRepository {

  constructor(
    private readonly tokenData: TokenData,
    private readonly apiData: ApiData
  ) {}

  get access_token(): string | null {
    return this.tokenData.access_token;
  }

  get refresh_token(): string | null {
    return this.tokenData.refresh_token;
  }

  get remember_me(): boolean {
    return this.tokenData.remember_me;
  }

  setTokens(access: string, refresh: string, remember: boolean): void {
    this.tokenData.setTokens(access, refresh, remember);
    //this.apiData.SetDefaultHeader
  }

  clearTokens(): void {
    this.tokenData.clearTokens();
  }
}
