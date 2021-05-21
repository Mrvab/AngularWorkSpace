import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intractbwcomp',
  templateUrl: './intractbwcomp.component.html',
  styleUrls: ['./intractbwcomp.component.css']
})
export class IntractbwcompComponent implements OnInit {
@Input('dataparent') public pdata:any
@Output() public childdata = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  sendEventToP(){
    this.childdata.emit("sending to parent component")
  }

}
