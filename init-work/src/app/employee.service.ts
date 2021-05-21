import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IEmployee } from './studyservices/castdata';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

// /assets/data/employee.json
  private _url:string = environment.dbURL + "/api/getalluser"

  constructor(private http: HttpClient ) { }
  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
}
