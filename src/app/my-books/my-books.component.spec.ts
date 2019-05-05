import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Injectable, Type } from '@angular/core';

import {FormsModule} from '@angular/forms'
//import { FilterPipe }from '../filter.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA }from '@angular/core';



import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { StarComponent } from './../shared/star/star.component';
import { followerComponent } from '../classes/followerComponent';
import { BrowserModule } from '@angular/platform-browser';
import { FakeBackendInterceptor } from '../fake-backend';
import { user } from '../classes/user';
import { of } from 'rxjs/internal/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsComponent } from '../shared/comments/comments.component';
import { LikesComponent } from '../shared/likes/likes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder,  FormControl , ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReviewComponent } from '../review/review.component';
import { ShelfService } from '../shared/dropdown/shelf.service';
import { AppRoutingModule } from '../app-routing.module';

 

let component: MyBooksComponent;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;
  let fixture: ComponentFixture<MyBooksComponent>;

fdescribe('FollowersComponent', () => {
  let fixture: ComponentFixture<MyBooksComponent>;
  let component: MyBooksComponent;
  let de: DebugElement;
  let mockbookService;

  mockbookService = jasmine.createSpyObj(['getmybooks','search']);
  
  let el:HTMLElement;
  var originalTimeout;
  class FakeNavbarComponent {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBooksComponent,
      NavbarComponent ],
      imports:[
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        FormsModule
  
                ],
        providers: [
          //{ provide: SharedService, useValue: mockSharedService},
          { provide: MyBooksComponent, useValue: mockbookService},
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
        
      })
  
    .compileComponents();
    component = fixture.componentInstance;
    component.ngOnInit();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    
       mockbookService.getmybooks.and.returnValue(of(
    [{
      "author_id": 1,
      "author_name": "G. Willow Wilson",
      "book_id": 1,
      "created_at": "2019-05-04 21:53:31",
      "id": 1,
      "img_url": "https://i5.walmartimages.com/asr/8bae6257-b3ed-43ba-b5d4-c55b6479697f_1.c6a36804e0a9cbfd0e408a4b96f8a94e.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
      "isbn": 9780802129031,
      "ratings_avg": 3.14,
      "ratings_count": 80,
      "reviews_count": 80,
      "title":"The Bird King"

    }
  ]
  ));
  fit(('should get the lenght of the array of books correctly'), () => {
    fixture.componentInstance.getmybooks(true,0);
    expect(fixture.componentInstance.posts.length).toEqual(1);
  });
  
  
  
  // Unit test for search function
  fit(' Search button clicked',fakeAsync(()=>{
  jasmine.createSpy('search').and.callThrough();
  let bt= fixture.debugElement.query(By.css('button#searchfollowingg'));
   bt.triggerEventHandler('click',null);
  tick(); // simulates the passage of time until all pending asynchronous activities finish
  fixture.detectChanges();
  expect(component.search).toHaveBeenCalled();
  
  }));
  }));




  });
