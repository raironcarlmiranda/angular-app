import { Component } from '@angular/core';
import { RedirectionService } from '../../routes/redirection.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
      CommonModule,
      RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public redirect: RedirectionService) {}
}
