import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

var firebaseConfig = {
  apiKey: "AIzaSyBVVlS8iN5Y6EzTHepACgp80ntmWxxWNrk",
  authDomain: "uclupasssystem.firebaseapp.com",
  databaseURL: "https://uclupasssystem.firebaseio.com",
  projectId: "uclupasssystem",
  storageBucket: "uclupasssystem.appspot.com",
  messagingSenderId: "903313339253"
};

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
