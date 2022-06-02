import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addlistdialog',
  templateUrl: './addlistdialog.component.html',
  styleUrls: ['./addlistdialog.component.css']
})
export class AddlistdialogComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  addList(name:string){
    if(name != ''){
      this.add.emit(name);  
    }
  }
 

}
