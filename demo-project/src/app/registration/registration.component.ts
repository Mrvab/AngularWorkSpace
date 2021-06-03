import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public isValidEmail:boolean = false
  public pwdMatch:boolean = false
  public hide = true

  constructor(private confServices : ConfigService) { }

  ngOnInit(): void {
  }
  register(email:string,pwd1:any,pwd2:any,fname:string,lname:string,dob:any){
    
    this.isValidEmail = this.validateEmail(email)
    this.pwdMatch = this.validatePassword(pwd1,pwd2)

    if(this.isValidEmail){
      if(this.pwdMatch){
        this.confServices.createUser(email,pwd1,fname,lname,dob)
        alert("registration success redirect to login")
        return true
        // TODO 
        // add data to DB and redirect to login page
        
        
        
      }
      else{
        
        alert("password does not match")
        return false

      }
    }
    else{

      alert("eamil not valid")
      return false

    }
  }
  
   validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validatePassword(pwd1:any,pwd2:any){
    if(pwd1===pwd2) return true
    return false

  }


}

