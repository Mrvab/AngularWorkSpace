import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-userworkspace',
  templateUrl: './userworkspace.component.html',
  styleUrls: ['./userworkspace.component.css'],
})
export class UserworkspaceComponent implements OnInit {
  public userId: any;
  public data: any;
  public msg: string = 'Not Assigned';
  private userData: any;
  public uName: string = '';
  public uEmail: string = '';
  public showhide: boolean = false;

  constructor(
    private confService: ConfigService,
    private cookieServ: CookieService
  ) {
    this.userData = JSON.parse(cookieServ.get('userdata'));
    this.uName = this.userData.first_name;
    this.uEmail = this.userData.email;
  }

  ngOnInit(): void {
    this.cookieServ.set('islogged', 'true');

    this.confService.getUserDevice(this.userData.id).subscribe((data) => {
      this.setData(data);
    });
  }
  setData(dData: any) {
    this.data = dData;
    if (this.data != '') {
      this.showhide = true;
    }
  }
}
