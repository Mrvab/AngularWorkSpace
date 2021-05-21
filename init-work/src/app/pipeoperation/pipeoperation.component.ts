 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeoperation',
  templateUrl: './pipeoperation.component.html',
  styleUrls: ['./pipeoperation.component.css']
})
export class PipeoperationComponent implements OnInit {
  public name = "sometext"
  public numb = 12345
  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

  constructor() { }

  ngOnInit(): void {
  }

}
