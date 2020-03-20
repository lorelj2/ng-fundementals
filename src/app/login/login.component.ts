import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: ['em {float: right; color: red; font-size: 13px}']
})
export class LoginComponent {

  userName: string;
  password: string;
  mouseEnter: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(loginForm) {
    this.authService.login(loginForm.userName, loginForm.password);
    this.router.navigate(['events']);
  }
}
