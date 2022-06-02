import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistdialogComponent } from './addlistdialog.component';

describe('AddlistdialogComponent', () => {
  let component: AddlistdialogComponent;
  let fixture: ComponentFixture<AddlistdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlistdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
