import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { userBookInfo } from '../classes/userBookInfo';

xdescribe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;
  let testBook: book = {
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
  }

  let testReview: review[] = [
    {
      "id": 2,
      "bookId": 11,
      "body": "This may be the best series of ever. I mean, heists on heists, dragons, pirates, betrayals and oh yeah DRAGONS. I’m in love and I will reread this series every single year of my life. Good job Chima. You are Queen.",
      "rating": 3,
      "lastUpdate": "2019-03-06 00:00:00",
      "created_at": "maay",
      "updated_at": "juuune",
      "numberLikes": 3,
      "numberComments": 3,
      "userId": "1111111",
      "userName": "hisoka",
      "userImg": "https://static.comicvine.com/uploads/original/14/147508/5258484-2.jpg"
  },
  {
      "id": 1,
      "bookId": 11,
      "body": "Whose here after Stormcaster just staring at the blank page hoping that you will see something change through sheer force of will?",
      "rating": 3,
      "lastUpdate": "2019-03-06 00:00:00",
      "created_at": "maay",
      "updated_at": "juuune",
      "numberLikes": 3,
      "numberComments": 3,
      "userId": "999999",
      "userName": "Salma",
      "userImg": "https://i.imgur.com/8zcsmU5.jpg"
  }];

  let testUserBookinfo: userBookInfo = {
    "id": 1,
    "rating": 3.5,
    "shelf_name": "Currently Reading",
    "body": "Wow! Great closure on all levels. The pace was smooth. Written well. I couldn't put it down. I just found Cinda two years ago. Since then I have plowed through everything she has written. Every book was a joy to read. Highly recommend this author!!!"
  }

  beforeEach( () =>  {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [BookService],
  });
  service = TestBed.get(BookService);
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

 it('should the selected book', () => {
    service.getBook(155).subscribe(
      (data: book) => {
        expect(data.genre).toBe('fiction');
      });
    let request: TestRequest = httpTestingController.expectOne('http://localhost:3000/book/155');
    expect(request.request.method).toEqual('GET');
    request.flush(testBook);

  });

  it('should get the reviews', () => {
    service.getBookReviews().subscribe(
      (data: review[]) => {
        expect(data.length).toBe(2);
        expect(data[0].userName).toBe('hisoka');
      });
    let request: TestRequest = httpTestingController.expectOne('http://localhost:3000/review');
    expect(request.request.method).toEqual('GET');
    request.flush(testReview);

  });

  it('should get user related book info', () => {
    service.getUserBookInfo().subscribe(
      (data: userBookInfo) => {
        expect(data.rating).toBe(3.5);
      });
    let request: TestRequest = httpTestingController.expectOne('http://localhost:3000/userBookInfo/1');
    expect(request.request.method).toEqual('GET');
    request.flush(testUserBookinfo);

  });

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
