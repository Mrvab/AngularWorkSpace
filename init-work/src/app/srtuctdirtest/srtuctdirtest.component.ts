import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-srtuctdirtest',
  templateUrl: './srtuctdirtest.component.html',
  styleUrls: ['./srtuctdirtest.component.css']
})
export class SrtuctdirtestComponent implements OnInit {
  public dspcon = true
  public show = true
  public ngdata = "some string"
  public color = ""
  public colors = ["red","green","blue","black"]
  constructor() { }
 
  ngOnInit(): void {
  }
  ngconswitch(){
    this.show = !this.show;
  }
  selectColor(value:string){
    this.color =value
  }
}
