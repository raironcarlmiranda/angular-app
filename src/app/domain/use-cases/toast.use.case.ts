import { Inject, Injectable, Signal } from "@angular/core";
import { TOAST_REPOSITORY } from "../../core/ports/token.injections";
import { ToastRepository } from "../repositories/toast.repository";
import { ToastMessage } from "../../data/model/toast.message";

@Injectable()
export class ToastUseCase {
  constructor(
    @Inject(TOAST_REPOSITORY) private toastRepository: ToastRepository) {}

  readonly toastSignal: Signal<ToastMessage | null> = this.toastRepository.toastSignal;

  public showInfo(message: string, duration?: number): void {
    return this.toastRepository.showInfo(message, duration);
  }

  public showSuccess(message: string, duration?: number): void {
    return this.toastRepository.showSuccess(message, duration);
  }

  public showWarning(message: string, duration?: number): void {
    return this.toastRepository.showWarning(message, duration);
  }

  public showError(message: string, duration?: number): void {
    return this.toastRepository.showError(message, duration);
  }
}
