import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Post } from '../../models/post.interface';

@Injectable()
export class FirestoreProvider {

  constructor(public firestore: AngularFirestore) {
    console.log('Hello FirestoreProvider Provider');
  }

  getPostList(): AngularFirestoreCollection<Post> {
    return this.firestore.collection(`posts`);
  }
  


}
