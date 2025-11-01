import { Inject, Injectable, Signal } from "@angular/core";
import { SPINNER_REPOSITORY } from "../../core/ports/token.injections";
import { SpinnerRepository } from "../repositories/spinner.repository";

@Injectable()
export class SpinnerUseCase {
  constructor(
    @Inject(SPINNER_REPOSITORY) private spinnerRepository: SpinnerRepository) {}

  readonly loadingStatus: Signal<boolean> = this.spinnerRepository.loadingStatus;

  public show(): void {
    return this.spinnerRepository.show();
  }

  public hide(): void {
    return this.spinnerRepository.hide();
  }
}
