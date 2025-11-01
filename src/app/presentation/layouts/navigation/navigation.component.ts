import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-navigation',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
