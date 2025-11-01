import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUseCase } from '../../../domain/use-cases/auth.use.case';
import { Result } from '../../../core/model/result';
import { User } from '../../../domain/entities/user';
import { RedirectionService } from '../../routes/redirection.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent<null>{

  loginForm!: FormGroup;

  constructor(
    private authUseCase: AuthUseCase,
    private fb: FormBuilder
  ){
    super();
  }

  ngOnInit(){
    this.initForm();
  }

  private initForm(): void{
    this.loginForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['AdminPassword@2025', Validators.required],
      remember_me: [true]
    });
  }

  async submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      // Optional: move to ViewModel with SubjectBehaviour or Signal
      this.executeWithLoading(this.authUseCase.login(this.loginForm.value))
        .subscribe({
          next: (result: Result<User>) => {
            result.handle<void>(
              () => {
                this.redirectionService.goToUsers();
              },
              (message, status) => {
                this.handleError(message, status)
              }
            );
          }
        });
    }
  }
}
