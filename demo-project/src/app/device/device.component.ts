import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  constructor(private confser: ConfigService) {}

  ngOnInit(): void {}
  addDevice(brand: any, model: any, type: any) {
    if (brand.value != '' && model.value != '' && type.value != '')
      this.confser.addDevice(brand.value, model.value, type.value);
    else alert('please provide all info');
  }
}
