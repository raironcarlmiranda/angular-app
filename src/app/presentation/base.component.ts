import { Directive, inject, OnDestroy, signal } from '@angular/core';
import { catchError, finalize, Observable, Subject, takeUntil } from 'rxjs';
import { SpinnerUseCase } from '../domain/use-cases/spinner.use.case';
import { ToastUseCase } from '../domain/use-cases/toast.use.case';
import { RedirectionService } from './routes/redirection.service';

@Directive()
export abstract class BaseComponent<T> implements OnDestroy {
  
    protected readonly destroy$ = new Subject<void>();
    
    protected data = signal<T | null>(null);

    protected readonly spinnerUseCase = inject(SpinnerUseCase); 

    protected readonly toastUseCase = inject(ToastUseCase); 

    protected readonly redirectionService = inject(RedirectionService)

    protected executeWithLoading<T>(obs$: Observable<T>): Observable<T> {
        this.spinnerUseCase.show();
        return obs$.pipe(
            finalize(() => this.spinnerUseCase.hide()),
            takeUntil(this.destroy$)
        );
    }

    protected handleError(message: string, status?: number): void {
        if (status === 401) {
            this.redirectionService.goToLogin();
        }

        this.toastUseCase.showError(message);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}