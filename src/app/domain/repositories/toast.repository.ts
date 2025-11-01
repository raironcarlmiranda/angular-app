import { Signal } from "@angular/core";
import { ToastMessage } from "../../data/model/toast.message";

export interface ToastRepository {
  readonly toastSignal: Signal<ToastMessage | null>;
  showSuccess(message: string, duration?: number): void;
  showError(message: string, duration?: number): void;
  showInfo(message: string, duration?: number): void;
  showWarning(message: string, duration?: number): void;
}
