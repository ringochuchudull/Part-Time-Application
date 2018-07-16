import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Post } from '../../models/post.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

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
      this.mainOperation(this.sectionTitle);
    });

  }

  ionViewDidLoad() {
    this.postList = this.firestoreProvider.getPostList().valueChanges();
  }

  mainOperation( titlename ){
    this.sectionTitle = titlename
  }


}
