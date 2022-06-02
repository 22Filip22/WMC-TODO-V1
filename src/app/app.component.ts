import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { todoList } from './interfaces/interface';
import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddlistdialogComponent } from './addlistdialog/addlistdialog.component'

import { TodosListsService } from './services/todos-lists.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData  } from '@angular/fire/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  todoLists: Observable<any[]> | undefined;
 
  constructor(public dialog: MatDialog, public todoService: TodosListsService, public afs: AngularFirestore, public cookie:CookieService) { }

  ngOnInit(): void {
    
    this.cookie.set("name", "");

    this.todoService.getItems().subscribe((_todolist:any) => {
    });

    this.todoLists = this.getTodoLists() as any;

  }

  getTodoLists(){
    return this.afs.collection('User').doc('filip').collection('listen').valueChanges({idField: "listenNamen"});
  }


  openDialog(){
    let dialog = this.dialog.open(AddlistdialogComponent);
    dialog.componentInstance.add.subscribe(_name => {
      this.dialog.closeAll();
      this.afs.collection('User').doc('filip').collection('listen').doc(_name).set({});
    });
  }

}
