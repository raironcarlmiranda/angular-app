import { Signal } from "@angular/core";

export interface SpinnerRepository {
  readonly loadingStatus: Signal<boolean>;
  show(): void;
  hide(): void;
}
