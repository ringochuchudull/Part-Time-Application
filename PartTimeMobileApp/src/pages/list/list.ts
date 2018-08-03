import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Post } from '../../models/post.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';
import { DetailPage } from '../detail/detail';
import { AngularFirestore } from 'angularfire2/firestore'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public postList: Observable<Post[]>;
  sectionTitle: string;

  title: string;
  region: string;
  durationtime: string;
  content: string;
  numLikes: Number = 0;

  left: number = 0; //Can be ignored
//  selectedItem: any;
 // icons: string[];
 // items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              public storage: Storage,
              public firestoreProvider: FirestoreProvider,
              private afs: AngularFirestore
              ){
      storage.get('section').then((val) => {
      this.mainOperationRT(val);
    });
  }
  
  ionViewDidLoad() {
    this.postList = this.firestoreProvider.getPostList().valueChanges();
  }

  addPost() {
    this.afs.collection(this.sectionTitle).doc(this.title).set({'title': this.title, 'content': this.content, 'durationtime':this.durationtime, 'left': this.left, 'type':this.sectionTitle });
    this.presentToast();
  }

  goToDetailPage(post: Post): void {
    this.navCtrl.push(DetailPage, {post:post} );
  }

  mainOperationRT( titlename ){
    this.sectionTitle = titlename
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '成功上載',
      duration: 2000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
