import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({ 
    url: `${environment.apiUrl}${req.url}`,
    setHeaders: {
      'ngrok-skip-browser-warning': 'any',
    }
  });
  
  return next(newRequest);
};
