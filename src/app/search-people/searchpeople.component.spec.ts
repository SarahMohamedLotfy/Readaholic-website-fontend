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

import { RatingModule, Rating } from 'ng2-rating';

import { followingComponent } from '../classes/followingComponent';

import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { StarComponent } from './../shared/star/star.component';
import { followerComponent } from '../classes/followerComponent';
import { BrowserModule } from '@angular/platform-browser';
import { FakeBackendInterceptor } from '../fake-backend';


let component: SearchPeopleComponent;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;
  let fixture: ComponentFixture<SearchPeopleComponent>;

fdescribe('searc', () => {
  let fixture: ComponentFixture<SearchPeopleComponent>;
  let component: SearchPeopleComponent;
  let de: DebugElement;
  let mocksaerchService;

  mocksaerchService = jasmine.createSpyObj(['getuserbyName','getuserbyUsername','getuserbyUsernameorName','delFollowing','add']);

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
          { provide: FollowingComponent, useValue: mocksaerchService},
        ]
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
    fit('should call search by username ', () => {
      let searchElement: DebugElement;
      let debugElement = fixture.debugElement;
      searchElement = fixture.debugElement.query(By.css('button#searchButton'));
      component.form.controls['searchBox'].setValue('sarah');
      component.form.controls['searchType'].setValue('Username');
      let authService = debugElement.injector.get(SearchPeopleComponent);
      let nameSpy = spyOn(authService, 'getuserbyName').and.callThrough();
       let usernameSpy = spyOn(authService, 'getuserbyUsername').and.callThrough();
  searchElement.triggerEventHandler('click',null);
  expect(usernameSpy).toHaveBeenCalled();
  expect(nameSpy).toHaveBeenCalledTimes(0);

    });
  
    fit('should call search by usernameorname ', () => {
      let searchElement: DebugElement;
      let debugElement = fixture.debugElement;
      searchElement = fixture.debugElement.query(By.css('button#searchButton'));
      component.form.controls['searchBox'].setValue('sarah');
      component.form.controls['searchType'].setValue('userORname');
      let authService = debugElement.injector.get(SearchPeopleComponent);
      let nameSpy = spyOn(authService, 'getuserbyName').and.callThrough();
       let usernameornameSpy = spyOn(authService, 'getuserbyUsernameorName').and.callThrough();
  searchElement.triggerEventHandler('click',null);
  expect(usernameornameSpy).toHaveBeenCalled();
  expect(nameSpy).toHaveBeenCalledTimes(0);

    });
  

  }));



});


