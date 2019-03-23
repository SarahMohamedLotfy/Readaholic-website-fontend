import { RatingModule, Rating } from 'ng2-rating';
import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { StarComponent } from './../shared/star/star.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookInfoComponent } from './book-info.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

describe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let fixture: ComponentFixture<BookInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoComponent,
        NavbarComponent,
        DropdownComponent,
        StarComponent ],
      imports:[
        RatingModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule
        ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show book details for a particular book', () => {
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
  });
});
