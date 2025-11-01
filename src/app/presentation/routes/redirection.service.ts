import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from './app.routes.enum';

@Injectable({
  providedIn: 'root',
})
export class RedirectionService {
  constructor(private router: Router) {}

  private readonly routes = {
    login: `/${AppRoutes.LOGIN}`,
    users: `/${AppRoutes.USERS}`,
    user: (id: string | number) => `/${AppRoutes.USERS}/${id}`,
    notFound: `/${AppRoutes.NOT_FOUND}`,
  };

  goToLogin(): Promise<boolean> {
    return this.router.navigateByUrl(this.routes.login);
  }

  goToUsers(): Promise<boolean> {
    return this.router.navigateByUrl(this.routes.users);
  }

  goToUser(id: string | number): Promise<boolean> {
    return this.router.navigateByUrl(this.routes.user(id));
  }

  goToNotFound(): Promise<boolean> {
    return this.router.navigateByUrl(this.routes.notFound);
  }

  redirectTo(path: string, params?: any): Promise<boolean> {
    return this.router.navigate([path], { queryParams: params });
  }

  get routePaths() {
    return this.routes;
  }
}
