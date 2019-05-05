import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from './comments.service';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,CommentsService,
        AppRoutingModule,FormGroup,Validators,RouterModule],
      declarations: [ CommentsComponent ]
    })

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });


  it('form invalid when empty', () => {
    expect(component.CommentForm.valid).toBeFalsy();// by default form is empty

  });

  it('comment form validity', () => {

    let content = component.CommentForm.controls['content'];
    let errors = {};

        //comment empty by default
        errors = content.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set comment to something wrong
        content.setValue("");
        errors = content.errors || {};
        expect(errors['required']).toBeTruthy();


        // Set comment to something correct
        content.setValue("comment");
        errors = content.errors || {};
        expect(errors['required']).toBeFalsy();


  });







});
