import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ RouterOutlet , NavbarComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
