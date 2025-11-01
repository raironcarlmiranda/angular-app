import { InjectionToken } from '@angular/core';
import { UserRepository } from '../../domain/repositories/user.repository';
import { SpinnerRepository } from '../../domain/repositories/spinner.repository';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { ToastRepository } from '../../domain/repositories/toast.repository';
import { TokenRepository } from '../../domain/repositories/token.repository';

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');
export const SPINNER_REPOSITORY = new InjectionToken<SpinnerRepository>('SpinnerRepository');
export const AUTH_REPOSITORY = new InjectionToken<AuthRepository>('AuthRepository');
export const TOAST_REPOSITORY = new InjectionToken<ToastRepository>('ToastRepository');
export const TOKEN_REPOSITORY = new InjectionToken<TokenRepository>('TokenRepository');
