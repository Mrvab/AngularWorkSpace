import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ConfigService } from '../config.service';

import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  public data:any =[]
  public btnVal:boolean = false
  public btntxt:string = "Disable"
  public btncolor = ["warn","primary"]
  // public setBtnColor:string = this.btncolor[0]
  /** Based on the screen size, switch from standard to one column per row */
  

  constructor(private breakpointObserver: BreakpointObserver,private confServices : ConfigService) {
    this.confServices.getAllUser().subscribe(data => this.data = data)
  }

  editUser(element:any,id:any,fname:any,email:any,isactive:any){
    if(isactive.value==1) this.btnVal = false
    else this.btnVal=true
    this.confServices.disableUser(id.value,isactive.value)
    this.btnUpdater(element,isactive)
    
  }
  btnUpdater(element:any,isactive:any){
    console.log(element)
    if(isactive.value==1) {
      element.textContent = "Enable";
    }
    else{
      element.textContent = "Disable";
    }
      
   

  }
 
  
}
