import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-userworkspace',
  templateUrl: './userworkspace.component.html',
  styleUrls: ['./userworkspace.component.css']
})
export class UserworkspaceComponent implements OnInit {
  public userId :any 
  public data:any


  constructor(private confService:ConfigService,private cookieServ:CookieService) { }

  ngOnInit(): void {
    this.userId = this.cookieServ.get('userid')
    this.confService.getUserDevice(this.userId).subscribe(data => {
    this.setData(data)
    })
  }
  setData(dData:any){
    this.data = dData

  }
  
 

}
