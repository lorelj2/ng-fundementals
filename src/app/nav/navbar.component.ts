import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'nav-component',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {
      font-size: 15px
    }

    #searchForm {
      margin-right: 100px
    }

    @media (max-width: 1200px) {
      #searchForm {
        display: none
      }
    }
  `]
})

export class NavbarComponent {
  constructor(private authService: AuthService) {
  }
}
