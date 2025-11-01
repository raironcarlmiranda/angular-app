import { Component } from '@angular/core';
import { UsersComponent } from '../../widgets/users/users.component';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [
    UsersComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
