import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { NO_TOKEN } from './token.interceptor';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthRepositoryImpl } from '../repositories/auth.repository.impl';
import { inject } from '@angular/core';
import { Result } from '../../core/model/result';
import { LoginResponse } from '../model/login.response';
import { TokenRepositoryImpl } from '../repositories/token.repository.impl';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authRepositoryImpl: AuthRepositoryImpl = inject(AuthRepositoryImpl);
  const tokenRepositoryImpl: TokenRepositoryImpl = inject(TokenRepositoryImpl);

  if(req.context.get(NO_TOKEN) === true){
    return next(req);
  }

  return next(req).pipe(
    catchError((err: any) => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          return authRepositoryImpl.refreshToken().pipe(
            switchMap((result: Result<LoginResponse>) => 
              result.handle(
                (data) => {

                  tokenRepositoryImpl.setTokens(
                    data.access_token, 
                    data.refresh_token, 
                    tokenRepositoryImpl.remember_me
                  )

                  return next(req.clone({ 
                    setHeaders: {
                      Authorization: `Bearer ${data.access_token}`,
                    }
                  }));
                },
                () => {
                  return next(req);
                }
              )
              
            )
          );
        }
      }
      return throwError(() => err)
    })
  );
};
