import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'postikko';
  constructor(public auth: AuthService) {}

  ngOnInit(): any {
    /* istanbul ignore else*/
    if (this.auth.isLoggedIn()) {
      // this.auth.saveRefreshTokenToService();
    }
  }
}
