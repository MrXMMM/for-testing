// module

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// firebase

import { AngularFireModule } from "@angular/fire";
import { environment } from "./environment";

// component

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { FirebaseService } from "./firebase.service";
import { LoginComponent } from "./login/login.component";
import { ChefListComponent } from "./chef-list/chef-list.component";
import { CashierComponent } from "./cashier/cashier.component";
import { AddMenuComponent } from './add-menu/add-menu.component';
// service

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "chef-list", component: ChefListComponent },
      { path: "cashier", component: CashierComponent }
      // { path: "cashier", component: CashierComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    ChefListComponent,
    CashierComponent,
    AddMenuComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
