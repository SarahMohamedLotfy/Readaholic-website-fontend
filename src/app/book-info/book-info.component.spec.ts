import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BookInfoComponent } from './book-info.component';
import {  NO_ERRORS_SCHEMA, DebugElement, Directive, Input, Component } from '@angular/core';
import { BookService } from './book.service';
import { StarComponent } from '../shared/star/star.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from '../shared/comments/comments.component';
import { LikesComponent } from '../shared/likes/likes.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { Validators, FormBuilder,  FormControl , ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LogInComponent } from '../log-in/log-in.component';
import { HomeComponent } from '../home/home.component';
import { SearchBooksComponent } from '../search-books/search-books.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ProfileComponent } from '../profile/profile.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { FollowersComponent } from '../followers/followers.component';
import { FollowingComponent } from '../following/following.component';
import { SearchPeopleComponent } from '../search-people/searchpeople.component';
import { MyBooksComponent } from '../my-books/my-books.component';
import { AboutusComponent } from '../AboutUs/AboutUs.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { SharedService } from '../shared.service';
import { book } from '../classes/book';
import { ReviewComponent } from '../review/review.component';
import { ShelfService } from '../shared/dropdown/shelf.service';
import { AppRoutingModule } from '../app-routing.module';


describe('BookInfo component', () => {
  let fixture: ComponentFixture<BookInfoComponent>;
  let mockBookService, mockShelfService;

  mockBookService = jasmine.createSpyObj(['getBook','getBookReviews','createReview','deleteReview']);
  mockShelfService = jasmine.createSpyObj(['getUserBookInfo','getShelf','removeFromShelf','addToShelf'])

  @Component({
    selector: 'navbar',
    template: '<div></div>'
  })
  class FakeNavbarComponent {
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookInfoComponent,
        LogInComponent,
        HomeComponent,
        SearchBooksComponent,
        ForgetPasswordComponent,
        ProfileComponent,
        AccountSettingsComponent,
        FollowersComponent,
        FollowingComponent,
        SearchPeopleComponent,
        MyBooksComponent,
        AboutusComponent,
        PageNotFoundComponent,
        ReviewComponent,
        FakeNavbarComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule, 
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      providers: [
        SharedService,
        //{ provide: SharedService, useValue: mockSharedService},
        { provide: BookService, useValue: mockBookService},
        { provide: ShelfService, useValue: mockShelfService}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    
    mockBookService.getBook.and.returnValue(of(
      {
        "pages": [
          {
            "id": 3,
          "title": "once and future",
          "isbn": 555,
          "img_url": "https://images-na.ssl-images-amazon.com/images/I/51Jb2iLFuXL._SX329_BO1,204,203,200_.jpg",
          "publication_date": "2015",
          "publisher": "kkkll",
          "language": "english",
          "description": "Robin of Locksley is dead. Maid Marian doesn’t know how she’ll go on, but the people of Locksley town, persecuted by the Sheriff of Nottingham, need a protector. And the dreadful Guy of Gisborne, the Sheriff’s right hand, wishes to step into Robin’s shoes as Lord of Locksley and Marian’s fiancé. Who is there to stop them? Marian never meant to tread in Robin’s footsteps—never intended to stand as a beacon of hope to those awaiting his triumphant return. But with a sweep of his green cloak and the flash of her sword, Marian makes the choice to become her own hero: Robin Hood.",
          "reviews_count": 55,
          "ratings_count": 63,
          "ratings_avg": 3,
          "author_id": 3,
          "author_name": "Meagan Spooner",
          "pages_no": 100,
          "created_at": "2010",
          "updated_at": "2010",
          "genre": "action"
          }
        ]
      }
    ));

    mockBookService.getBookReviews.and.returnValue(of({
      pages: [
        {
          id: 2,
          book_id: 3,
          body: "great book",
          rating: 5,
          shelf_name: "read",
          likes_count: 5,
          comments_count: 5,
          user_id: 3,
          username: "menna",
          userimagelink: "https://images.gr-assets.com/books/1529823092l/39320115.jpg"
        }
      ]
    }));

    mockShelfService.getUserBookInfo.and.returnValue(of({
      pages: [ {
        id: 5,
        rating: 5,
        shelf_name: 2,
        body: "great book"
      }]
    }));

    mockBookService.createReview.and.returnValue(of({
      Review_id: 1,
      bodyOfReview: "i love this book",
      rate: 5,
      shelfType: "read"
    }));

    fixture = TestBed.createComponent(BookInfoComponent);
   
  })
  fit(('should be created'), () => {
    expect(fixture.componentInstance).toBeTruthy();
  })



  fit(('should set myBook property to the book returned from the server'), () => {
    fixture.componentInstance.getBookInfo();

    expect(fixture.componentInstance.myBook.id).toEqual(3);
  });
 
  fit(('should set reviews property to the reviews returned from the server'), () => {
    
    fixture.componentInstance.getBookReviews();

    expect(fixture.componentInstance.reviews.length).toEqual(1);
  });

  fit(('should set userinfo property to the data returned from the server'), () => {
    
    fixture.componentInstance.getUserInfo();

    expect(fixture.componentInstance.userInfo.body).toContain('great');
  });

  fit(('should create review with the passed arguments'), () => {

    fixture.componentInstance.getBookInfo();
    fixture.componentInstance.getUserInfo();

    let bt= fixture.debugElement.query(By.css('button#save'));
    bt.triggerEventHandler('click',null);

    expect(mockBookService.createReview).toHaveBeenCalledWith(3,2,"great book",5);
  });

  fit(('should set error msg if there is no review body'), () => {
   
    fixture.componentInstance.reviewBody = "";

    let bt= fixture.debugElement.query(By.css('button#save'));
    bt.triggerEventHandler('click',null);
    
   expect(fixture.componentInstance.errMsg).toContain("You must enter a review");
  
  });

  fit(('should set error msg if user tries to delete a review and he does not have one on this book'), () => {
    mockBookService.deleteReview.and.returnValue(of(true));
    fixture.componentInstance.reviewId = -1;
    fixture.componentInstance.isUser = true;

    let bt= fixture.debugElement.query(By.css('button#delete'));
    bt.triggerEventHandler('click',null);
  

   expect(fixture.componentInstance.errMsg).toContain("You don't have a review on this book");
    
  })

  fit(('should delete review'), () => {
    mockBookService.deleteReview.and.returnValue(of(true));
    fixture.componentInstance.getUserInfo();
    fixture.componentInstance.isUser = true;

    let bt= fixture.debugElement.query(By.css('button#delete'));
    bt.triggerEventHandler('click',null);
    
    expect(mockBookService.deleteReview).toHaveBeenCalledWith(5);
    //expect(fixture.componentInstance.reviewId).toEqual(-1);
  })
})
/*fdescribe('BookInfoComponent', () => {
  let fixture: ComponentFixture<BookInfoComponent>;
  let mockActivatedRoute,mockRouter,mockService;

  mockActivatedRoute = {
    snapshot: { paramMap: { get: () => { return '3' }}}
  }
  mockRouter = jasmine.createSpyObj(['navigateByUrl']);
  mockService = jasmine.createSpyObj(['getBook','getBookReviews','getUserBookInfo','createReview'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookInfoComponent,
       
      ],
     // schemas: [ NO_ERRORS_SCHEMA  ],
      //as2ale 3la de
      imports: [
        HttpClientModule,
        FormsModule, 
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
      SharedModule],
    })

   /* mockService.getBook.and.returnValue(of({

      id: 3,
      title: "book title",
      isbn: 555,
      img_url: "https://images.gr-assets.com/books/1529823092l/39320115.jpg",
      publication_date: "2015",
      publisher: "kkkll",
      language: "english",
      description: "book overview",
      reviews_count: 55,
      ratings_count: 63,
      ratings_avg: 3,
      author_id: 3,
      author_name: "ali",
      pages_no: 100,
      created_at: "2010",
      updated_at: "2010",
      genre: "action"


    }));

    mockService.getBookReviews.and.returnValue(of({
      id: 2,
      book_id: 3,
      body: "great book",
      rating: 5,
      shelf_name: "read",
      likes_count: 5,
      comments_count: 5,
      user_id: 3,
      username: "menna",
      userimagelink: "https://images.gr-assets.com/books/1529823092l/39320115.jpg"
    }));


    mockService.getUserBookInfo.and.returnValue(of({
      rating: 5,
      shelf_name: 2,
      body: "great book"
    }));
*/


 /*   fixture = TestBed.createComponent(BookInfoComponent);

  });

  fit('should render the book title', () => {
    fixture.detectChanges();
    console.log(fixture.componentInstance)
    expect(fixture.componentInstance.myBook.title).toEqual('book title');
  });

 /* it('should create review', () => {
    mockService.createReview.and.returnValue(of({
      id: 2,
      book_id: 3,
      body: "great book",
      rating: 5,
      shelf_name: "read",
      likes_count: 5,
      comments_count: 5,
      user_id: 3,
      username: "menna",
      userimagelink: "https://images.gr-assets.com/books/1529823092l/39320115.jpg"
    }))

    fixture.componentInstance.open(1);
    let  saveBtn: DebugElement = fixture.debugElement.query( By.css('button#save'));
    saveBtn.triggerEventHandler('click',null);

    //expect(mockService.createReview).toHaveBeenCalled();

  it('should render the book title', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.myBook.title).toEqual('book title');
    //expect(document.getElementById('Booktitle').innerText).toContain("book title");
  });


  it('should create review', () => {
    fixture.componentInstance.ngOnInit();
    fixture.componentInstance.review();
    //document.getElementById('post').click();
 //   expect(mockService.createReview).toHaveBeenCalled();
   /* let de = fixture.debugElement;
    let bookService = de.injector.get(BookService);
    let createReviewSpy = spyOn(bookService,'createReview').and.callThrough();
    let  postButton: DebugElement = fixture.debugElement.query( By.css('#post'));

    postButton.triggerEventHandler('click',null);
   expect(createReviewSpy).toHaveBeenCalled();*/
  





 