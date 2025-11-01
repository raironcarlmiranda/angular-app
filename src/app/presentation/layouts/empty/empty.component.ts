import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-empty',
  imports: [RouterOutlet],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyComponent {

}
