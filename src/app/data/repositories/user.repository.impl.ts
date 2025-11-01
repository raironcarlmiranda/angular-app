import { Injectable } from '@angular/core';
import { UserRepository } from '../../domain/repositories/user.repository';
import { Observable } from 'rxjs';
import { ApiData } from '../sources/remote/api.data';
import { Result } from '../../core/model/result';
import { User } from '../../domain/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImpl implements UserRepository {

  constructor(private apiData: ApiData) {}

  getUsers(): Observable<Result<User[]>> {
    return this.apiData.get<User[]>("/users");
  }
}
