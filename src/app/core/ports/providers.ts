import { Provider } from '@angular/core';
import { 
  AUTH_REPOSITORY,
  SPINNER_REPOSITORY, 
  TOAST_REPOSITORY, 
  TOKEN_REPOSITORY, 
  USER_REPOSITORY } from './token.injections';
import { UserRepositoryImpl } from '../../data/repositories/user.repository.impl';
import { UserUseCase } from '../../domain/use-cases/user.use.case';
import { SpinnerUseCase } from '../../domain/use-cases/spinner.use.case';
import { SpinnerRepositoryImpl } from '../../data/repositories/spinner.repository.impl';
import { AuthUseCase } from '../../domain/use-cases/auth.use.case';
import { AuthRepositoryImpl } from '../../data/repositories/auth.repository.impl';
import { ToastUseCase } from '../../domain/use-cases/toast.use.case';
import { ToastRepositoryImpl } from '../../data/repositories/toast.repository.impl';
import { TokenRepositoryImpl } from '../../data/repositories/token.repository.impl';

export const APP_PROVIDERS: Provider[] = [
  UserUseCase,
  SpinnerUseCase,
  AuthUseCase,
  ToastUseCase,
  {
    provide: USER_REPOSITORY,
    useClass: UserRepositoryImpl
  },
  {
    provide: SPINNER_REPOSITORY,
    useClass: SpinnerRepositoryImpl
  },
  {
    provide: AUTH_REPOSITORY,
    useClass: AuthRepositoryImpl
  },
  {
    provide: TOAST_REPOSITORY,
    useClass: ToastRepositoryImpl
  },
  {
    provide: TOKEN_REPOSITORY,
    useClass: TokenRepositoryImpl
  }
];
