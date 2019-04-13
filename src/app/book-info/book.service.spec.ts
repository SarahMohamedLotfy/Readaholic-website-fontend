import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { userBookInfo } from '../classes/userBookInfo';

describe('BookService', () => {
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
      "id": 5,
      "bookId": 11,
      "body": "Ah. The last 200 pages were excellent, but the 400 before that were just all over the place. Connection to characters got lost in all the perspectives (seven, I think). And while I was inherently invested in the secondary characters, I wish it had not come at the detriment of Lyss and Ash. I love this world and these series, but was ultimately disappointed in this finale’s distraction with servicing every character a superficial character arc.",
      "rating": 3,
      "lastUpdate": "2019-03-06 00:00:00",
      "created_at": "maay",
      "updated_at": "juuune",
      "numberLikes": 3,
      "numberComments": 3,
      "userId": "5",
      "userName": "Kamal Shaker",
      "userImg": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg"
  },
  {
      "id": 3,
      "bookId": 11,
      "body": "After the first read, this book is the worst one in the Harry Potter series. Characters are not as likeable as they are in the other books. However, I recently reread it (after reading book 6), and found it to be a very good read.",
      "rating": 3,
      "lastUpdate": "2019-03-06 00:00:00",
      "created_at": "maay",
      "updated_at": "juuune",
      "numberLikes": 3,
      "numberComments": 3,
      "userId": "2",
      "userName": "Ahmed Elsayed",
      "userImg": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg"
  }];

  let testUserBookinfo: userBookInfo = {
    "id": 1,
    "rating": 3.5,
    "shelf_name": 0,
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
        expect(data[0].userName).toBe('Kamal Shaker');
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

<<<<<<< HEAD
it('should be created', () => {
=======
  it('should be created', () => {
>>>>>>> 44abdb8cd6dba3177b7b922ce896b51c161e905c
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
