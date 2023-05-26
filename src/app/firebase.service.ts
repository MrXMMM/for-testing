import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Food } from "./food";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getFoods() {
    let DocRef = this.firestore.collection<Food>("food", e =>
      e.where("stat", "==", "false")
    );
    return DocRef.valueChanges();
  }

  getFoodsCashier() {
    let DocRef = this.firestore.collection<Food>("food", e =>
      e.where("stat", "==", "true")
    );
    return DocRef.valueChanges();
  }

  addFood(n: string, p: number, num: number, m: string) {
    let food = {
      name: n,
      price: p,
      number: num,
      maihate: m,
      stat: "false"
    };
    const ref = this.firestore.collection("food").add(food);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }
  updateStat(id: string) {
    let finish = {
      stat: "true"
    };
    const ref = this.firestore
      .collection("food")
      .doc(id)
      .update(finish);
  }

  deleteFood(id: string) {
    return this.firestore
      .collection("food")
      .doc(id)
      .delete();
  }
}
