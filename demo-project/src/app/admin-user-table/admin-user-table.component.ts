import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IUser } from '../castdata';
import { ConfigService } from '../config.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceComponent } from '../device/device.component';
import { AssignDeviceComponent } from '../assign-device/assign-device.component';

@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.css']
})
export class AdminUserTableComponent implements OnInit {
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'email',
    'pwd',
    'dob',
    'is_active',
    'device_id',
    'action',
    
  ]

  data: IUser[] = []
  updata:any

  constructor(private confService: ConfigService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.confService.getAllUser().subscribe((res:any)=>{
      this.data=res
      
    })
  }


  editUser(id:any,fname:any,email:any,isactive:any){
    this.confService.disableUser(id,isactive) 
    this.updateTable(true)
    
  }
  updateTable(ok:any){
    this.confService.getAllUser().subscribe((res:any)=>{
      this.data=res
      this.updateData(this.data)
      
    })
  }

  updateData(res:any){
    this.data=res
    console.log("tb update")
    
  }

  addDevice(){
    this.dialog.open(DeviceComponent)
  }
  assignDevice(){
  this.dialog.open(AssignDeviceComponent)
  }
  remDevice(id:any){

    this.confService.removeDevice(id)
    this.updateTable(true)
  }

}
