import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  showRegister: boolean = false


   onLoginClick() {
    this.showRegister = false
   }
}
