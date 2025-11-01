import { Component } from '@angular/core';
import { RedirectionService } from '../../routes/redirection.service';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    RouterModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public redirect: RedirectionService) {}
}
