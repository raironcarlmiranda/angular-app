import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingData {

  private readonly _activeCount = signal(0);

  readonly loadingStatus: Signal<boolean> = computed(() => this._activeCount() > 0);

  show(): void {
    this._activeCount.update(c => c + 1);
  }

  hide(): void {
    this._activeCount.update(c => Math.max(0, c - 1));
  }

  reset(): void {
    this._activeCount.set(0);
  }
}
