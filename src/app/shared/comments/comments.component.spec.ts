import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from './comments.service';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';
import { ReviewComponent } from 'src/app/review/review.component';
import { PageNotFoundComponent } from 'src/app/page-not-found.component';
import { SharedModule } from '../shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let mockService;

 // mockService = jasmine.createSpyObj(['onSubmit']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,CommentsService,
        AppRoutingModule,FormGroup,Validators,RouterModule,
        HttpClientModule,
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule],
      declarations: [ CommentsComponent, BookInfoComponent, ReviewComponent,
        PageNotFoundComponent ],
        providers: [
          {
            provide: CommentsService, useValue: mockService
          },SharedService
        ],
        schemas: [NO_ERRORS_SCHEMA]
    })
    //mockService.onSubmit.and.returnValue(of({}))

   // fixture = TestBed.createComponent(CommentsComponent);
    //component = fixture.componentInstance;
    //component.ngOnInit();
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
