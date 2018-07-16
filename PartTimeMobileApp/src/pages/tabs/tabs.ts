import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

import { Storage } from '@ionic/storage';

/*
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  sectionTitle: string;

  tab1Root: any = HomePage;
  tab2Root: any = ListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage) {

   // storage.get('section').then((val) => {
   //   console.log('The title should be (via TabPage)', val);
   //   this.sectionTitle = val;
   // });
  
  }

}
