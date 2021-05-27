import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './registration/castdata';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _urlCreate = environment._dburl + "/api/adduser"
  private _urlCheck = environment._dburl+"/api/loguser"
  private _urlGetall = environment._dburl+"/api/getalluser"
  private _urlDisableUser = environment._dburl + "/api/disableUser"


  constructor(private http: HttpClient) { }
  createUser(email:string,pwd:any,fname:string,lname:string,dob:any){
    console.log("creat use hit")
     this.http.post(this._urlCreate,{
       "first_name":fname,
       "last_name":lname,
       "dob":dob,
       "email":email,
       "pwd":pwd 
     }).subscribe()
 
  }
  credCheckuser(email:string,pwd:string){
  
   return this.http.get(this._urlCheck+`/${email}&${pwd}`)

  }
  getAllUser(){
    return this.http.get(this._urlGetall)
  }

  disableUser(id:any,isactive:any){
    (isactive == 1) ? isactive = 0:isactive = 1
    this.http.post(this._urlDisableUser,{"id":id,"isactive":isactive}).subscribe()
  }
  
}
