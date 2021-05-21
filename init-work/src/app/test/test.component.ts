import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "test_pr op"
  public siteUrl = window.location.href
  //property binding
  public testid = "test1"
  public isDisable = false
  public successClass = 'text-success'
  public isError = false
  public isSpecial = true
  public selectClass = {
    'text-success' : !this.isError,
    'text-danger' : this.isError,
    'text-special' : this.isSpecial
  }
  public dangerClass='text-danger'
  public specialClass='text-special'

  public greetings ="";
  public bind_in="";
  constructor() { }

  ngOnInit(): void {
    
  }
  greetTest(){
    return "its a test "+ this.name;
  }
  whenClick(){
    this.greetings = "just clicked it"

  }

}
 