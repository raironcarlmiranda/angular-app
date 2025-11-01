import { Injectable, Signal } from '@angular/core';
import { LoadingData } from '../sources/local/loading.data';
import { SpinnerRepository } from '../../domain/repositories/spinner.repository';

@Injectable({
  providedIn: 'root'
})
export class SpinnerRepositoryImpl implements SpinnerRepository {

  constructor(private loadingData: LoadingData) {}

  readonly loadingStatus: Signal<boolean> = this.loadingData.loadingStatus;

  show(): void {
    this.loadingData.show();
  }

  hide(): void {
    this.loadingData.hide();
  }
}
