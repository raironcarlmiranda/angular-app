import { Routes } from '@angular/router';
import { AppRoutes } from './presentation/routes/app.routes.enum';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: AppRoutes.LOGIN, 
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./presentation/layouts/empty/empty.component').then(m => m.EmptyComponent),
        children: [
            {
                path: AppRoutes.LOGIN,
                loadComponent: () => import('./presentation/pages/login/login.component').then(m => m.LoginComponent)
            }
        ]
    },
    {
        path: '',
        loadComponent: () => import('./presentation/layouts/navigation/navigation.component').then(m => m.NavigationComponent),
        children: [
            {
                path: AppRoutes.USERS,
                loadComponent: () => import('./presentation/pages/user/user.component').then(m => m.UserComponent)
            },
        ]
    },
];
