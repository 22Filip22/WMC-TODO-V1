import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListeComponent } from './liste/liste.component'
import { AddlistdialogComponent } from './addlistdialog/addlistdialog.component'

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DragDropModule } from '@angular/cdk/drag-drop'; 

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { TodosListsService } from './services/todos-lists.service';

import { CookieService } from 'ngx-cookie-service';

 
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddlistdialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase, 'version1'),
    AngularFirestoreModule
  ],
  providers: [
    TodosListsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
