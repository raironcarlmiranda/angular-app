import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './presentation/widgets/navbar/navbar.component';
import { SpinnerComponent } from './presentation/widgets/spinner/spinner.component';
import { ToastComponent } from './presentation/widgets/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SpinnerComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app Philippines Region';
  constructor(){
    //setup access token 
    console.log("appComponent")
  }
}
