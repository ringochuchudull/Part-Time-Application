import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  sectionTitle: string;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams
              ,public storage: Storage) {

      storage.get('section').then((val) => {
      this.mainOperationRT(val);
    });

  }

  mainOperationRT( titlename ){
    this.sectionTitle = titlename
    console.log("Main Operation RT " + this.sectionTitle);

  }

}
