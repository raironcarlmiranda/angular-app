import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_PROVIDERS } from './application/ports/providers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    ...APP_PROVIDERS,
    provideRouter(routes),
    provideHttpClient(),
  ]
};
