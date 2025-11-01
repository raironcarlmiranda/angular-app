import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerUseCase } from '../../../domain/use-cases/spinner.use.case';
import { BaseComponent } from '../../base.component';

@Component({
  standalone: true,
  selector: 'app-spinner',
  imports: [
      CommonModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent extends BaseComponent<null> {
  constructor(){
    super();
  }
}
