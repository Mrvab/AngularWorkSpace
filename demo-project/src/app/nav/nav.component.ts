import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public showSignup: boolean = true;
  public showLogin: boolean = true;
  public showLogout: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  //add more rules here for btns
  toggleLoginVisibility() {
    this.showSignup = true;
    this.showLogout = true;
    this.showLogin = false;
  }
  toggleSigninVisibility() {
    this.showSignup = false;
    this.showLogout = false;
    this.showLogin = true;
  }
  toggleLogoutVisibility() {
    this.cookieService.deleteAll();
    this.showLogin = true;
    this.showLogout = false;
    this.showSignup = true;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cookieService: CookieService
  ) {}
}
