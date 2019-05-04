import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowinggService } from './httpfollowing.service';
import { followingComponent } from '../classes/followingComponent';

fdescribe('HttpFollowingService', () => {
  let service: HttpFollowinggService;
  let httpTestingController: HttpTestingController;
  
  beforeEach( () =>  {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [HttpFollowinggService],
  });
  service = TestBed.get(HttpFollowinggService);
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  

// Unit testing for Get following request
describe('#Get the following people', () => {
  it('returned Observable should match the right data', () => {
    const mockFollowing = [
      {
        "id": 3,
        "name": "Mohamed Hayalla",
        "image_link": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
        "bookid": 144,
        "currently_reading": "A Gathering of Shadows",
        "book_image": "https://images.gr-assets.com/books/1429627728l/20764879.jpg",
        "country": "Cairo,11,Egypt"
      },
      {
        "id": 5,
        "name": "Kamal Shaker",
        "image_link": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
        "bookid": 6,
        "currently_reading": "حكاية الاسم الجيديد",
        "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377934260i/18400361._SX120_.jpg",
        "country": "Suez,Egypt"
      },
      {
        "id": 4,
        "name": "Walid Hassan",
        "image_link": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
        "bookid": 2,
        "currently_reading": "Stormcaster-Shattered Realms",
        "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500578312i/33816845._SY180_.jpg",
        "country": "Giza,11,Egypt"
      },
      {
        "id": 1,
        "name": "Huda Yahya",
        "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "bookid": 3,
        "currently_reading": "اخر ايام الارض ",
        "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471448936i/31544463._SX120_.jpg",
        "country": "Asuit,Egypt"
      },
      {
        "id": 2,
        "name": "Ahmed Elsayed",
        "image_link": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
        "bookid": 8,
        "currently_reading": "Deathcaster - Shattered Realms",
        "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529823092i/39320115._SY180_.jpg",
        "country": "Aswan,11,Egypt"
      }
    ];

    service.getfollowing()
      .subscribe(coursesData => {
        expect(followingComponent[0].name).toEqual('Mohamed Hayalla');
        expect(followingComponent[0].id).toEqual('3');
        expect(followingComponent[0].bookid).toEqual('144');
        expect(followingComponent[0].currently_reading).toEqual('A Gathering of Shadows');
        expect(followingComponent[0].country).toEqual('Cairo,11,Egypt');
        expect(followingComponent[4].name).toEqual('Ahmed Elsayed');
        expect(followingComponent[4].id).toEqual('2');
        expect(followingComponent[4].bookid).toEqual('8');
        expect(followingComponent[4].currently_reading).toEqual('Deathcaster - Shattered Realms');
        expect(followingComponent[4].country).toEqual('Aswan,11,Egypt')
      });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/following'
    );

    req.flush(mockFollowing);
  });
});











});
