import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sectionTitle: any;


  constructor(public navCtrl: NavController, public storage: Storage) {
    
    storage.get('section').then((val) => {
      this.sectionTitle = val;
      console.log("Left-TabPage-Title: " + this.sectionTitle);
      this.mainOperation(this.sectionTitle);
    });

  }

  mainOperation( titlename ){
    this.sectionTitle = titlename
    console.log("Main Operation LT " + this.sectionTitle);

  }


}
