import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { Component, Input, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
 
  @Input() public ToDos:string[] = [];
  @Input() public name:string = '';
  
  todos: Observable<any[]> | undefined;


  constructor(public afs:AngularFirestore) { }

  ngOnInit(): void {
    this.todos = this.getTodoList();
  }

  getTodoList(){
    return this.afs.collection('User').doc('filip').collection('listen').doc(this.name).collection(this.name).valueChanges({idField: "todo"});
  }

  addToDo(todo:string) {     
    this.afs.collection('User').doc('filip').collection('listen').doc(this.name).collection(this.name).doc(todo).set({});
  }

  removeToDo(todo:string){
    this.afs.collection('User').doc('filip').collection('listen').doc(this.name).collection(this.name).doc(todo).delete();
  }
}
