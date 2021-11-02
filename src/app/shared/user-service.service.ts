import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userCollection: AngularFirestoreCollection<User>;
  user!: Observable<User[]>;

  constructor(private something: AngularFirestore) { 
    this.userCollection = this.something.collection<User>('users');
    this.user = this.userCollection.valueChanges();
  }

  addUser(user: User){
    const pushkey = this.something.createId();
    user.key = pushkey;
    this.userCollection.doc(pushkey).set(user);
  }

  getUser(){
    return this.user;
  }

  modifyUser(userID: string, userChanges: User){
    this.userCollection.doc(userID).update(userChanges);
  }

  removeUser(userID: string,){
    this.userCollection.doc(userID).delete();
  }
}
