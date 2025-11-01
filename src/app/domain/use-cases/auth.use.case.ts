import { Inject, Injectable } from "@angular/core";
import { AUTH_REPOSITORY, TOKEN_REPOSITORY } from "../../core/ports/token.injections";
import { map, Observable } from "rxjs";
import { Result } from "../../core/model/result";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginRequest } from "../../data/model/login.request";
import { User } from "../entities/user";
import { LoginResponse } from "../../data/model/login.response";
import { TokenRepository } from "../repositories/token.repository";

@Injectable()
export class AuthUseCase {
  constructor(
    @Inject(AUTH_REPOSITORY) private authRepository: AuthRepository,
    @Inject(TOKEN_REPOSITORY) private tokenRepository: TokenRepository,
  ) {}

  public login(body: LoginRequest): Observable<Result<User>> {
    // declare map
    // simplified chaining or convert to Promise then add viewModel
    return this.authRepository.login(body).pipe(
      map((result: Result<LoginResponse>) => 
        result.handle<Result<User>>(
          (data) => {
            try {
              this.tokenRepository.setTokens(
                data.access_token,
                data.refresh_token,
                body.remember_me
              );
              return Result.success<User>(data.user);
            } catch (error: any) {
              return Result.failure<User>(error);
            }
          },
          (message, status) => Result.failure<User>(message, status)
        )
      )
    );
  }
}

