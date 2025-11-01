import { Injectable, Signal } from '@angular/core';
import { ToastRepository } from '../../domain/repositories/toast.repository';
import { ToastMessage } from '../model/toast.message';
import { ToastData } from '../sources/local/toast.data';

@Injectable({
  providedIn: 'root'
})
export class ToastRepositoryImpl implements ToastRepository {

  constructor(private toastData: ToastData) {}

  readonly toastSignal: Signal<ToastMessage | null> = this.toastData.toastSignal;

  showSuccess(message: string): void {
    this.toastData.showSuccess(message);
  }

  showInfo(message: string): void {
    this.toastData.showInfo(message);
  }

  showError(message: string): void {
    this.toastData.showError(message);
  }

  showWarning(message: string): void {
    this.toastData.showWarning(message);
  }
  
}
