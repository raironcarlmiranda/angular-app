import { Component, ElementRef, ViewChild, AfterViewInit, effect } from '@angular/core';
import { BaseComponent } from '../../base.component';

declare const bootstrap: any;

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent extends BaseComponent<null> implements AfterViewInit {

  @ViewChild('liveToast', { static: true }) toastEl!: ElementRef;
  private bsToast: any;

  constructor() {
    super();

    effect(() => {
      const toast = this.toastUseCase.toastSignal();
      if (toast) {
        this.bsToast.show();
      }
    });
  }

  ngAfterViewInit() {
    this.bsToast = new bootstrap.Toast(this.toastEl.nativeElement, { delay: 5000 });
  }
}
