import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public hide: boolean = false;
  public udata: any;
  constructor(
    private cookieService: CookieService,
    private confService: ConfigService
  ) {
    this.udata = JSON.parse(cookieService.get('userdata'));
  }

  updateUser(fname: any, lname: any, email: any, dob: any) {
    this.confService.editUserProfile(fname, lname, email, dob);
  }

  ngOnInit(): void {}
}
