
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public data:any=[]
public loginState:boolean = false
public isLoggedIn:boolean = false
public isAdmin = false

  constructor(private confServices : ConfigService) { }

  ngOnInit(): void {
  }
  userValid(email:string,pwd:any){
    this.confServices.credCheckuser(email,pwd).subscribe(data =>{
      this.data = data
      this.updateLoginPage()
    })
    
    return false
    
  }
  updateLoginPage(){
    console.log(this.data)
    if( this.data != null && this.data.length !=0){
      this.loginState = true
      this.isLoggedIn=false
      if(this.data[0].is_admin === 1){
        this.isAdmin = true
      } 
      else{
        this.isAdmin = false
      }
    }
    else{
      this.isLoggedIn=true
      this.loginState = false
    
    }
    
  }
  
  

}
