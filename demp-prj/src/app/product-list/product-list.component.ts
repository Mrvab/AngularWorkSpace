import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = [
    {"name":"product 1","description":"product 1 "},
    {"name":"product 2","description":"product 2 "},
    {"name":"product 3","description":"product 3 "},
    {"name":"product 4","description":"product 4 "},
    {"name":"product 5","description":"product 5 "},

  ]
   
  
  constructor() { }

  ngOnInit(): void {
  }
 public share= ()=>{
   //do something
   alert("you just shared the product")
 }
}
