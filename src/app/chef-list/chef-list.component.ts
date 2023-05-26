import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Food } from "../food";
import { FirebaseService } from "../firebase.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-chef-list",
  templateUrl: "./chef-list.component.html",
  styleUrls: ["./chef-list.component.css"]
})
export class ChefListComponent implements OnInit {
  Foods : Food[];
  constructor( private firebaseService:
  FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getFoods().subscribe
    (val => {this.Foods = val;});
  }
  finish(id: string){
    if (window.confirm("confirm")) {
      this.firebaseService.updateStat(id)
    }
  }
}
