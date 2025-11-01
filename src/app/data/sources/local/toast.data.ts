import { Injectable, Signal, signal } from '@angular/core';
import { ToastMessage } from '../../model/toast.message';

@Injectable({ 
  providedIn: 'root' 
})
export class ToastData {

  private _toastSignal = signal<ToastMessage | null>(null);

  readonly toastSignal: Signal<ToastMessage | null> = this._toastSignal.asReadonly();

  private show(title: string, message: string, type: string = 'info'): void {
    this._toastSignal.set({ title, message, type });
  }

  showSuccess(message: string): void {
    this.show("Success Message", message, 'success');
  }

  showError(message: string): void {
    this.show("Error Message", message, 'error');
  }

  showInfo(message: string): void {
    this.show("Information",message, 'info');
  }

  showWarning(message: string): void {
    this.show("Error Message", message, 'warning');
  }
}
