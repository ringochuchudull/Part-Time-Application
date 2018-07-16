import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Post } from '../../models/post.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  sectionTitle: any;
  public postList: Observable<Post[]>;

  constructor(public navCtrl: NavController, 
    public storage: Storage,
    public firestoreProvider: FirestoreProvider
  ){    
    storage.get('section').then((val) => {
      this.sectionTitle = val;
      console.log("Left-TabPage-Title: " + this.sectionTitle);
    });

  }

  ionViewDidLoad() {
    this.postList = this.firestoreProvider.getPostList().valueChanges();
  }

  goToDetailPage(post: Post): void {
    this.navCtrl.push(DetailPage, {post:post} );
  }


  mainOperation( titlename ){
    this.sectionTitle = titlename
  }


}
