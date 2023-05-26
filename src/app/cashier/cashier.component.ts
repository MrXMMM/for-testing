import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Food } from "../food";
import { FirebaseService } from "../firebase.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  
  Foods : Food[];
  constructor( private firebaseService:
  FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getFoodsCashier().subscribe
    (val => {this.Foods = val;});
  }

  SumPrice(dish:number,price:number){
    return dish*price;
  }

  del(id: string){
    if (window.confirm("confirm")) {
      this.firebaseService.
      deleteFood(id)
    }
  }

  

  

}