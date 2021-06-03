import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-assign-device',
  templateUrl: './assign-device.component.html',
  styleUrls: ['./assign-device.component.css']
})
export class AssignDeviceComponent implements OnInit {

  public users:any
  public devices:any
  selectedUser:any
  selectedDevice:any
  @Output() isAssignEmit = new EventEmitter()
  // isAssign=false

  constructor(private confServ:ConfigService) { }

  ngOnInit(): void {
    this.confServ.getAllUser().subscribe(data => this.users =data)
    this.confServ.getAllDevice().subscribe(data => this.devices=data)
  }

  assignDevice(){
    console.log(this.selectedDevice,this.selectedUser)
    if(this.selectedDevice!=undefined&&this.selectedUser!=undefined)
    {
      this.confServ.assignDevice(this.selectedDevice,this.selectedUser)
      this.isAssignEmit.emit()
    }
    
    else alert("select user and device")
    this.isAssignEmit.emit()

  }
}
