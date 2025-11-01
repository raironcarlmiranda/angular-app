import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenRepositoryImpl } from '../repositories/token.repository.impl';

export const NO_TOKEN = new HttpContextToken(() => false);

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenRepositoryImpl: TokenRepositoryImpl = inject(TokenRepositoryImpl)

  if(req.context.get(NO_TOKEN) === true){
    return next(req);
  }
  
  const newRequest = req.clone({ 
    setHeaders: {
      Authorization: `Bearer ${tokenRepositoryImpl.access_token}`,
    }
  });

  return next(newRequest);
};
