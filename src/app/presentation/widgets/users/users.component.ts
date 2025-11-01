import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Result } from '../../../core/model/result';
import { UserUseCase } from '../../../domain/use-cases/user.use.case';
import { BaseComponent } from '../../base.component';
import { User } from '../../../domain/entities/user';
import { RedirectionService } from '../../routes/redirection.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent extends BaseComponent<User[]>{
  
  constructor(private userUseCase: UserUseCase) {
    super();
  }
  
  ngOnInit(){
    this.getusers();
  }

  getusers() {
    this.executeWithLoading(this.userUseCase.getUsers())
    .subscribe({
      next: (result: Result<User[] | null>) => {
        result.handle<void>(
          (data) => {
            this.data.set(data);
          },
          (message, status) => {
            // need persistence in appComponent
            this.handleError(message, status);
          }
        );
      }
    });
  }
}
