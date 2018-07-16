import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('post')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
