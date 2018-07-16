import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Post } from '../../models/post.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  sectionTitle: string;
  public postList: Observable<Post[]>;
//  selectedItem: any;
 // icons: string[];
 // items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public firestoreProvider: FirestoreProvider
              ){
      storage.get('section').then((val) => {
      this.mainOperationRT(val);
    });
  }
  
  ionViewDidLoad() {
    this.postList = this.firestoreProvider.getPostList().valueChanges();
  }

  goToDetailPage(post: Post): void {
    this.navCtrl.push(DetailPage, {post:post} );
  }

  mainOperationRT( titlename ){
    this.sectionTitle = titlename
  }

}
