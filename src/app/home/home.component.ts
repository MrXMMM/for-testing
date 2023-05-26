import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    number: new FormControl(),
    maihate: new FormControl('')
  });
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}
  
  onDish(i: string) {
   
    console.log(i);
    console.log(this.form.value.number);
    console.log(this.form.value.maihate);
    // this.firebaseService.addFood(
    // this.form.value.name,
    // this.form.value.price,
    // this.form.value.number,
    // this.form.value.maihate
    // )
  }
}
