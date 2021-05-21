import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-studyservices',
  templateUrl: './studyservices.component.html',
  styleUrls: ['./studyservices.component.css']
})
export class StudyservicesComponent implements OnInit {
  public employees:any=[]
  constructor(private _employeeServices:EmployeeService) { }

  ngOnInit(): void {
    this._employeeServices.getEmployee()
    .subscribe(data => this.employees = data)
  }

}

