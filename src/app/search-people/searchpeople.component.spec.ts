import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchPeopleComponent } from './searchpeople.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';


import {FormsModule} from '@angular/forms'
//import { FilterPipe }from '../filter.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { user } from '../classes/user';
import { of } from 'rxjs/internal/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsComponent } from '../shared/comments/comments.component';
import { LikesComponent } from '../shared/likes/likes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder,  FormControl , ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LogInComponent } from '../log-in/log-in.component';
import { HomeComponent } from '../home/home.component';
import { SearchBooksComponent } from '../search-books/search-books.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ProfileComponent } from '../profile/profile.component';
import { FollowingComponent } from '../following/following.component';
import { ReviewComponent } from '../review/review.component';
import { ShelfService } from '../shared/dropdown/shelf.service';
import { AppRoutingModule } from '../app-routing.module';


 

let component: SearchPeopleComponent;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;
  let fixture: ComponentFixture<SearchPeopleComponent>;

fdescribe('FollowersComponent', () => {
  let fixture: ComponentFixture<SearchPeopleComponent>;
  let component: SearchPeopleComponent;
  let de: DebugElement;
  let mockfollowerService;

  mockfollowerService = jasmine.createSpyObj(['getfollowers','addFollowing','unfollow']);

  class FakeNavbarComponent {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPeopleComponent,
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
          { provide: SearchPeopleComponent, useValue: mockfollowerService},
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
  
    .compileComponents();

    fit('should call search by name ', () => {
      let searchElement: DebugElement;
      let debugElement = fixture.debugElement;
      searchElement = fixture.debugElement.query(By.css('button#searchButton'));
      component.form.controls['searchBox'].setValue('sarah');
      component.form.controls['searchType'].setValue('name');
      let authService = debugElement.injector.get(SearchPeopleComponent);
      let nameSpy = spyOn(authService, 'getuserbyName').and.callThrough();
       let usernameSpy = spyOn(authService, 'getuserbyUsername').and.callThrough();
  searchElement.triggerEventHandler('click',null);
  expect(nameSpy).toHaveBeenCalled();
  expect(usernameSpy).toHaveBeenCalledTimes(0);

    });


    fit('should call search by userName ', () => {
      let searchElement: DebugElement;
      let debugElement = fixture.debugElement;
      searchElement = fixture.debugElement.query(By.css('button#searchButton'));
      component.form.controls['searchBox'].setValue('dkdf');
      component.form.cfit('should call search by title ', () => {
        let searchElement: DebugElement;
        let debugElement = fixture.debugElement;
        searchElement = fixture.debugElement.query(By.css('button#searchButton'));
        component.form.controls['searchBox'].setValue('sarah');
        component.form.controls['searchType'].setValue('Username');
        let authService = debugElement.injector.get(SearchPeopleComponent);
        let usernameSpy = spyOn(authService, 'getuserbyUsername').and.callThrough();
         let nameSpy = spyOn(authService, 'getuserbyName').and.callThrough();
    searchElement.triggerEventHandler('click',null);
    expect(usernameSpy).toHaveBeenCalled();
    expect(nameSpy).toHaveBeenCalledTimes(0);
    
    
      });

  mockfollowerService.getfollowers.and.returnValue(of(
    [{
      "id": 1,
      "name": "Huda Yahya",
      "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
       "country": "Asuit,Egypt"
    },
    {
      "id": 2,
      "name": "Ahmed Elsayed",
      "image_link": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
       "country": "Aswan,11,Egypt"
    }
  ]
  ));
  fit(('should get the lenght of the array of people correctly'), () => {
    fixture.componentInstance.searchForBook();
    expect(fixture.componentInstance.posts.length).toEqual(1);
  });
 
  fit(('should follow person  with the passed arguments'), () => {

    fixture.componentInstance.searchForBook();
    let bt= fixture.debugElement.query(By.css('button#followbutton'));
    bt.triggerEventHandler('click',null);

    expect(mockfollowerService.addfollowing).toHaveBeenCalledWith(3,"sarah mohamed","https://images.gr-assets.com/photos/1530363365p8/3711511.jpg"
    ,5,"great book","https://images.gr-assets.com/photos/1530363365p8/3711511.jpg","Giza,11,Egypt");
  });
  
  fit(('should unfollow peolpe'), () => {
    mockfollowerService.deletefollowing.and.returnValue(of(true));
    fixture.componentInstance.searchForBook();

    let bt= fixture.debugElement.query(By.css('button#followbutton'));
    bt.triggerEventHandler('click',null);
    
    expect(mockfollowerService.deletefollowingw).toHaveBeenCalledWith(5);
  })
  
   // Unit test for search function
fit(' Search button clicked',fakeAsync(()=>{
  jasmine.createSpy('search').and.callThrough();
    let bt= fixture.debugElement.query(By.css('button#searchButton'));
      bt.triggerEventHandler('click',null);
  
    tick(); // simulates the passage of time until all pending asynchronous activities finish
     fixture.detectChanges();
      expect(component.search).toHaveBeenCalled();
  
  }));
  




  });

  
  }


  

  ))})