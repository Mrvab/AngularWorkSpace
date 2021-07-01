import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public data: any = [];
  public loginState: boolean = false;
  public isLoggedIn: boolean = false;
  public isAdmin = false;
  public hide = true;

  constructor(
    private confServices: ConfigService,
    private cookieService: CookieService
  ) {
    this.loginState = false;
  }

  ngOnInit(): void {}
  userValid(email: string, pwd: any) {
    this.confServices.credCheckuser(email, pwd).subscribe((data) => {
      this.data = data;
      if (this.data != undefined) {
        this.data[0].tokenActive = true;
        this.cookieService.set('userdata', JSON.stringify(this.data[0]));
      }
      this.updateLoginPage();
    });

    return false;
  }
  updateLoginPage() {
    if (this.data != null && this.data.length != 0) {
      this.cookieService.set('userid', this.data[0].id);
      this.loginState = true;
      this.isLoggedIn = false;

      if (this.data[0].is_admin === 1) {
        this.isAdmin = true;
        this.cookieService.set('isAdmin', 'true');
      } else {
        this.cookieService.set('isAdmin', 'false');
        this.isAdmin = false;
      }
    } else {
      this.isLoggedIn = true;
      this.loginState = false;
    }
  }
}
