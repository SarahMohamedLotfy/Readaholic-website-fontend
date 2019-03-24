import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowingService } from './httpfollower.service';
import { followerComponent } from '../classes/followerComponent';

fdescribe('HttpFollowingService', () => {
  let service: HttpFollowingService;
  let httpTestingController: HttpTestingController;
  let testfollower: followerComponent []= [{
    "id": 1,
    "name": "Huda Yahya",
    "image_url": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
    "country": "Asuit,Egypt"
  },
  {
    "id": 2,
    "name": "Ahmed Elsayed",
    "image_url": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
    "country": "Aswan,11,Egypt"
  },
  {
    "id": 3,
    "name": "Mohamed Hayalla",
    "image_url": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
    "country": "Cairo,11,Egypt"
  },
  {
    "id": 4,
    "name": "Walid Hassan",
    "image_url": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
    "country": "Giza,11,Egypt"
  },
  {
    "id": 5,
    "name": "Kamal Shaker",
    "image_url": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
    "country": "Suez,Egypt"
  },
  {
    "id": 6,
    "name": "Eslam Ahmed",
    "image_url": "https://images.gr-assets.com/photos/1551961617p8/3783093.jpg",
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
    let request: TestRequest = httpTestingController.expectOne('https://my-json-server.typicode.com/SarahMohamedLotfy/ggfollow/following');
    expect(request.request.method).toEqual('GET');
    request.flush(testfollower);

  });

  

  fit('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
});
