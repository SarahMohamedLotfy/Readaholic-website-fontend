import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowingService } from './httpfollower.service';
import { followerComponent } from '../classes/followerComponent';

fdescribe('HttpFollowingService', () => {
  let service: HttpFollowingService;
  let httpTestingController: HttpTestingController;
  
  


  beforeEach( () =>  {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [HttpFollowingService],
  });
  service = TestBed.get(HttpFollowingService);
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  fit('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
// Unit testing for Get followers request
describe('#Get the followers people', () => {
  it('returned Observable should match the right data', () => {
    const mockFollower = [
      {
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
    ];

    service.getfollowing()
    .subscribe(coursesData => {
      expect(followerComponent[0].name).toEqual('Huda Yahya');
      expect(followerComponent[0].id).toEqual('1');
      expect(followerComponent[0].book_id).toEqual('3');
      expect(followerComponent[0].currently_reading).toEqual('اخر ايام الارض');
      expect(followerComponent[0].country).toEqual('Asuit,Egypt');
      expect(followerComponent[4].name).toEqual('Ahmed Elsayed');
      expect(followerComponent[4].id).toEqual('5');
      expect(followerComponent[4].book_id).toEqual('6');
      expect(followerComponent[4].currently_reading).toEqual('حكاية الاسم الجيديد');
      expect(followerComponent[4].country).toEqual('Suez,Egypt')
      });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/followers'
    );

    req.flush(mockFollower);
  });
});

  fit('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
})
