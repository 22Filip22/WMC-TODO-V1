import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { todoList } from '../interfaces/interface';

import { ObjectUnsubscribedError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosListsService {

//  todoLists: AngularFirestoreCollection<todoList> | undefined;
  //todos: Observable<todoList[]>;

  docRef:any;
  doc1:any;

  constructor(public afs:AngularFirestore) { 
   //this.todos = afs.doc('User/filip/listen/asd').valueChanges();
  // this.todoLists = this.afs.collection('User/filip/listen');
 //  this.todos = this.todoLists.valueChanges();
//
   // this.todos = afs.doc('User/filip/listen/asd').snapshotChanges().pipe();

   //funkt
    this.docRef = this.afs.doc('User/filip/listen/asd');
    this.doc1 = this.docRef.valueChanges();

    //this.doc1 = this.docRef.valueChanges();

    //-------------------------------------------------
  }


  getItems(){
    return this.doc1; 
  } 


}

