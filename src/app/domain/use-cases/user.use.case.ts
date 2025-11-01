import { Inject, Injectable } from "@angular/core";
import { UserRepository } from "../repositories/user.repository";
import { USER_REPOSITORY } from "../../core/ports/token.injections";
import { map, Observable } from "rxjs";
import { Result } from "../../core/model/result";
import { User } from "../entities/user";

@Injectable()
export class UserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository) {}

  getUsers(): Observable<Result<User[] | null>> {
    return this.userRepository.getUsers().pipe(
      map((result: Result<User[]>) =>
        result.handle<Result<User[]>>(
          (data) => Result.success<User[]>(data),
          (message, status) => Result.failure<User[]>(message, status)
        )
      )
    );
  }
}
