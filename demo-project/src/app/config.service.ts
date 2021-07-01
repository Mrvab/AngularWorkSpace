import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _urlCreate = environment._dburl + '/api/adduser';
  private _urlCheck = environment._dburl + '/api/loguser';
  private _urlGetall = environment._dburl + '/api/getalluser';
  private _urlDisableUser = environment._dburl + '/api/disableUser';
  private _urlAddDevice = environment._dburl + '/api/adddevice';
  private _urlGetAllDevice = environment._dburl + '/api/getalldevice';
  private _urlAssignDevice = environment._dburl + '/api/assigndevice';
  private _urlRemoveDevice = environment._dburl + '/api/removedevice';
  private _urlGetUserDevice = environment._dburl + '/api/getuserdevice';
  private _urlGetSortedData = environment._dburl + '/api/getsorteddata';
  private _urlUserProfileEdit = environment._dburl + '/api/userprofileedit';
  private token: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  getTokenData() {
    this.token = JSON.parse(this.cookieService.get('userdata'));
  }

  editUserProfile(fname: any, lanme: any, email: any, dob: any) {
    this.getTokenData();
    this.http
      .post(this._urlUserProfileEdit, {
        fname: fname,
        lname: lanme,
        email: email,
        dob: dob,
        token: this.token.token,
        id: this.token.id,
      })
      .subscribe();
  }

  createUser(email: string, pwd: any, fname: string, lname: string, dob: any) {
    this.http
      .post(this._urlCreate, {
        first_name: fname,
        last_name: lname,
        dob: dob,
        email: email,
        pwd: pwd,
      })
      .subscribe();
  }

  credCheckuser(email: string, pwd: string) {
    return this.http.get(this._urlCheck + `/${email}&${pwd}`);
  }

  getAllUser() {
    this.getTokenData();
    return this.http.get(this._urlGetall + `/${this.token.token}`);
  }

  disableUser(id: any, isactive: any) {
    isactive == 1 ? (isactive = 0) : (isactive = 1);
    this.http
      .post(this._urlDisableUser, {
        id: id,
        isactive: isactive,
        token: this.token.token,
      })
      .subscribe();
  }

  addDevice(brand: any, model: any, type: any) {
    this.getTokenData();
    this.http
      .post(this._urlAddDevice, {
        brand: brand,
        model: model,
        type: type,
        token: this.token.token,
      })
      .subscribe();
  }

  getAllDevice() {
    this.getTokenData();
    return this.http.get(this._urlGetAllDevice + `/${this.token.token}`);
  }

  assignDevice(deviceId: any, uId: any) {
    this.getTokenData();
    this.http
      .post(this._urlAssignDevice, {
        deviceId: deviceId,
        id: uId,
        token: this.token.token,
      })
      .subscribe();
  }

  removeDevice(id: any) {
    this.getTokenData();
    this.http
      .post(this._urlRemoveDevice, {
        id: id,
        token: this.token.token,
      })
      .subscribe();
  }

  getUserDevice(id: any) {
    this.getTokenData();
    return this.http.get(this._urlGetUserDevice + `/${id}&${this.token.token}`);
  }

  getSortedRecord(columnName: any, type: any) {
    this.getTokenData();
    return this.http.get(
      this._urlGetSortedData + `/${columnName}&${type}&${this.token.token}`
    );
  }
}
