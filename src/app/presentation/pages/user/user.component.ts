import { Component } from '@angular/core';
import { UsersComponent } from '../../widgets/users/users.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    UsersComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
