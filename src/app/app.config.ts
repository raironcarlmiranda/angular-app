import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_PROVIDERS } from './core/ports/providers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './data/interceptors/base.url.interceptor';
import { tokenInterceptor } from './data/interceptors/token.interceptor';
import { refreshTokenInterceptor } from './data/interceptors/refresh.token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    ...APP_PROVIDERS,
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        tokenInterceptor,
        refreshTokenInterceptor
      ])
    ),
  ]
};
