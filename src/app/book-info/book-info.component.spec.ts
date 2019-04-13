import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BookInfoComponent } from './book-info.component';
import {  NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { BookService } from './book.service';
import { StarComponent } from '../shared/star/star.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 


fdescribe('BookInfoComponent', () => {
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
        StarComponent,
        DropdownComponent,
        NavbarComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: BookService, useValue: mockService }
      ],
      schemas: [ NO_ERRORS_SCHEMA  ],
      imports: [HttpClientModule]
    })

    mockService.getBook.and.returnValue(of({
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
    }));

    fixture = TestBed.createComponent(BookInfoComponent); 
  });

  fit('should render the book title', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.myBook.title).toEqual('book title');
    //expect(document.getElementById('Booktitle').innerText).toContain("book title");
  });


  fit('should create review', () => {
    fixture.componentInstance.ngOnInit();
    fixture.componentInstance.createReview();
    //document.getElementById('post').click();
    expect(mockService.createReview).toHaveBeenCalled();
   /* let de = fixture.debugElement;
    let bookService = de.injector.get(BookService);
    let createReviewSpy = spyOn(bookService,'createReview').and.callThrough();
    let  postButton: DebugElement = fixture.debugElement.query( By.css('#post'));

    postButton.triggerEventHandler('click',null);
   expect(createReviewSpy).toHaveBeenCalled();*/
  });

  


});

 /* it('should show book details for a particular book', () => {
     component.myBook = {
        "id": 155,
        "title": "The Raven Boys",
        "isbn": 53333338,
        "imageUrl": "https://images.gr-assets.com/books/1477103737l/17675462.jpg",
        "pagesNum": 400,
        "publisher": "Scholastic Press",
        "publicationDate": "2010",
        "language": "English",
        "ratingsAvg": 4.06,
        "ratingsCount": 50,
        "reviewsCount": 50,
        "description": "“There are only two reasons a non-seer would see a spirit on St. Mark’s Eve,” Neeve said. “Either you’re his true love . . . or you killed him.” It is freezing in the churchyard, even before the dead arrive. Every year, Blue Sargent stands next to her clairvoyant mother as the soon-to-be dead walk past. Blue herself never sees them—not until this year, when a boy emerges from the dark and speaks directly to her. His name is Gansey, and Blue soon discovers that he is a rich student at Aglionby, the local private school. Blue has a policy of staying away from Aglionby boys. Known as Raven Boys, they can only mean trouble.",
        "authorId": 43,
        "authorName": " Maggie Stiefvater ",
        "genre": "fiction",
        "link": "kkkkk"
     };

     fixture.detectChanges();
     const titleElement: HTMLElement = fixture.debugElement.query( By.css('#Booktitle')).nativeElement;
    expect(titleElement.innerText).toContain('The Raven Boys');
  });

  it('should show book reviews', () => {
*/
/*
  fit('should show book reviews', () => {
    component.reviews =  [{
      "id": 5,
      "bookId": 11,
      "body": "Ah. The last 200 pages were excellent, but the 400 before that were just all over the place. Connection to characters got lost in all the perspectives (seven, I think). And while I was inherently invested in the secondary characters, I wish it had not come at the detriment of Lyss and Ash. I love this world and these series, but was ultimately disappointed in this finale’s distraction with servicing every character a superficial character arc.",
      "rating": 3,
      "lastUpdate": "2019-03-06 00:00:00",
      "created_at": "maay",
      "updated_at": "juuune",
      "numberLikes": 3,
      "numberComments": 3,
      "userId":"000000",
      "userName": "killua",
      "userImg": "https://pbs.twimg.com/profile_images/955923907051184129/8LxKsoPl_400x400.jpg"
  }];
  fixture.detectChanges();
  const titleElement: HTMLElement = fixture.debugElement.query( By.css('#reviewerName')).nativeElement;
 expect(titleElement.innerText).toContain('killua');
  });*/
});
  });
*/
/**@Component({
    selector: 'app-star',
    template: '<div></div>'
  })
  class FakeStarComponent {
   @Input() starsCount: number;
   @Input() readOnly: boolean;
   @Input() shelf;
   @Input() bookId : number;
  // @Output() rated:EventEmitter<string> = new EventEmitter<string>();
  userRate: number = 0;
  };  

  @Component({
    selector: 'app-dropdown',
    template: '<div></div>'
  })
  class FakeDropdownComponent  {
  @Input() shelfId: number;
  @Input() bookId: number;
  shelves: string[] = ["Read", "Currently Reading", "Want To Read"];
  shelfStatus: string = this.shelves[2];
  //@Output() shelfSelected: EventEmitter<string> = new EventEmitter<string>();
  buttonDisabled: boolean = false; 
  removeEnabled: boolean = false;
  };

  @Component({
    selector: 'navbar',
    template: '<div></div>'
  })
  class FakeNavbarComponent {}
 */
