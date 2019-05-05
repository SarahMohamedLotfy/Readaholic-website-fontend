import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FollowersComponent } from './followers.component';
import {FormsModule} from '@angular/forms'
import { By } from '@angular/platform-browser';
import {  NO_ERRORS_SCHEMA, DebugElement, Directive, Input, Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';
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
import { LogInComponent } from '../log-in/log-in.component';
import { HomeComponent } from '../home/home.component';
import { SearchBooksComponent } from '../search-books/search-books.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ProfileComponent } from '../profile/profile.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { FollowingComponent } from '../following/following.component';
import { SearchPeopleComponent } from '../search-people/searchpeople.component';
import { MyBooksComponent } from '../my-books/my-books.component';
import { AboutusComponent } from '../AboutUs/AboutUs.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { ReviewComponent } from '../review/review.component';
import { ShelfService } from '../shared/dropdown/shelf.service';
import { AppRoutingModule } from '../app-routing.module';


 

let component: FollowersComponent;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;
  let fixture: ComponentFixture<FollowersComponent>;

fdescribe('FollowersComponent', () => {
  let fixture: ComponentFixture<FollowersComponent>;
  let component: FollowersComponent;
  let de: DebugElement;
  let mockfollowerService;

  mockfollowerService = jasmine.createSpyObj(['getfollowers','addFollowing','unfollow']);

  class FakeNavbarComponent {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersComponent,
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
          { provide: FollowersComponent, useValue: mockfollowerService},
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
  
    .compileComponents();

    
  mockfollowerService.getfollowers.and.returnValue(of(
    [{
      "id": 1,
      "name": "Huda Yahya",
      "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
      "book_id": 3,
      "currently_reading": "اخر ايام الارض ",
      "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471448936i/31544463._SX120_.jpg",
      "country": "Asuit,Egypt"
    },
    {
      "id": 2,
      "name": "Ahmed Elsayed",
      "image_link": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
      "book_id": 8,
      "currently_reading": "Deathcaster - Shattered Realms",
      "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529823092i/39320115._SY180_.jpg",
      "country": "Aswan,11,Egypt"
    },
    {
      "id": 3,
      "name": "Mohamed Hayalla",
      "image_link": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
      "book_id": 7,
      "currently_reading": "A Tale of Two Cities",
      "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310124698i/9847899._SY180_.jpg",
      "country": "Cairo,11,Egypt"
    },
    {
      "id": 4,
      "name": "Walid Hassan",
      "image_link": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
      "book_id": 2,
      "currently_reading": "Stormcaster-Shattered Realms",
      "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500578312i/33816845._SY180_.jpg",
      "country": "Giza,11,Egypt"
    },
    {
      "id": 5,
      "name": "Kamal Shaker",
      "image_link": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
      "book_id": 6,
      "currently_reading": "حكاية الاسم الجيديد",
      "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377934260i/18400361._SX120_.jpg",
      "country": "Suez,Egypt"
    }
  ]
  ));
  fit(('should get the lenght of the array of followers correctly'), () => {
    fixture.componentInstance.Getfollowers();
    expect(fixture.componentInstance.posts.length).toEqual(5);
  });
 
  fit(('should create review with the passed arguments'), () => {

    fixture.componentInstance.Getfollowers();
    let bt= fixture.debugElement.query(By.css('button#followbutton'));
    bt.triggerEventHandler('click',null);

    expect(mockfollowerService.addfollowing).toHaveBeenCalledWith(3,"sarah mohamed","https://images.gr-assets.com/photos/1530363365p8/3711511.jpg"
    ,5,"great book","https://images.gr-assets.com/photos/1530363365p8/3711511.jpg","Giza,11,Egypt");
  });
  
  fit(('should unfollow follower'), () => {
    mockfollowerService.deletefollowing.and.returnValue(of(true));
    fixture.componentInstance.Getfollowers();

    let bt= fixture.debugElement.query(By.css('button#followbutton'));
    bt.triggerEventHandler('click',null);
    
    expect(mockfollowerService.deletefollowingw).toHaveBeenCalledWith(5);
  })
  
   // Unit test for search function
fit(' Search button clicked',fakeAsync(()=>{
  jasmine.createSpy('search').and.callThrough();
    let bt= fixture.debugElement.query(By.css('button#searchfollower'));
      bt.triggerEventHandler('click',null);
  
    tick(); // simulates the passage of time until all pending asynchronous activities finish
     fixture.detectChanges();
      expect(component.search).toHaveBeenCalled();
  
  }));
  }));




  });

  
 




//Unit test for deletefollowing function check if the count of following peole decrease ?
  /*it('should be able to decrement the count (-1)', () => {
    component.delFollowing(7);
    expect(component.count).toEqual(5);
  });*/
  // Unit test for addfollowing function check if the count of following peole decrease ?

  /*it('should be able to increment the count (+1)', () => {

    component.add(7);
    expect(component.count).toEqual(6);
  });*/

  /*fit(' Unfollow button clicked',fakeAsync(()=>{
    spyOn(component, 'add');
    let bt= fixture.debugElement.query(By.css('#followbutton'));
      bt.triggerEventHandler('click',null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
     fixture.detectChanges();
      expect(component.add).toHaveBeenCalled();
}));*/



