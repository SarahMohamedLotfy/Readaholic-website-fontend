import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowingService } from './httpfollower.service';
import { followerComponent } from '../classes/followerComponent';

fdescribe('HttpFollowingService', () => {
  let service: HttpFollowingService;
  let httpTestingController: HttpTestingController;
  let testfollower: followerComponent []= [
    {
      "id": 1,
      "name": "Huda Yahya",
      "image_url": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
      "bookid": 3,
      "bookname": "اخر ايام الارض ",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471448936i/31544463._SX120_.jpg",
      "country": "Asuit,Egypt"
    },
    {
      "id": 2,
      "name": "Ahmed Elsayed",
      "image_url": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
      "bookid": 8,
      "bookname": "Deathcaster - Shattered Realms",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529823092i/39320115._SY180_.jpg",
      "country": "Aswan,11,Egypt"
    },
    {
      "id": 3,
      "name": "Mohamed Hayalla",
      "image_url": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
      "bookid": 7,
      "bookname": "A Tale of Two Cities",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310124698i/9847899._SY180_.jpg",
      "country": "Cairo,11,Egypt"
    },
    {
      "id": 4,
      "name": "Walid Hassan",
      "image_url": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
      "bookid": 2,
      "bookname": "Stormcaster-Shattered Realms",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500578312i/33816845._SY180_.jpg",
      "country": "Giza,11,Egypt"
    },
    {
      "id": 5,
      "name": "Kamal Shaker",
      "image_url": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
      "bookid": 6,
      "bookname": "حكاية الاسم الجيديد",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377934260i/18400361._SX120_.jpg",
      "country": "Suez,Egypt"
    },
    {
      "id": 6,
      "name": "Eslam Ahmed",
      "image_url": "https://images.gr-assets.com/photos/1551961617p8/3783093.jpg",
      "bookid": 5,
      "bookname": "شاى بالنعناع ",
      "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309610934i/11922284._SX120_.jpg",
      "country": "Aswan,11,Egypt"
    }
  ];



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




 fit('should get followerList', () => {
    service.getfollowers().subscribe(
      (data: followerComponent[]) => {
        expect(data.length).toBe(6);
      });
    let request: TestRequest = httpTestingController.expectOne('http://localhost:3000/followers');
    expect(request.request.method).toEqual('GET');
    request.flush(testfollower);

  });



  fit('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
});
