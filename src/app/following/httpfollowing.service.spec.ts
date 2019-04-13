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

  fit('should be created', () => {
    const service: HttpFollowinggService = TestBed.get(HttpFollowinggService);
    expect(service).toBeTruthy();
  });



// Unit testing for Get following request
fdescribe('#Get the following people', () => {
  fit('returned Observable should match the right data', () => {
    const mockFollowing = [
      {
        "book_id": null,
        "book_image": null,
        "currently_reading": null,
        "id": 2,
        "image_link": "ta7a.jpg",
        "name": "ta7a",
        "pages": null
      },
      {
        "book_id": null,
        "book_image": null,
        "currently_reading": null,
        "id": 7,
        "image_link": "mohamed.jpg",
        "name": "Mohamed",
      }
    ];

    service.getfollowing()
      .subscribe(coursesData => {
        expect(followingComponent[0].name).toEqual('ta7a');
        expect(followingComponent[0].id).toEqual('2');
        expect(followingComponent[1].name).toEqual('Mohamed');
        expect(followingComponent[1].id).toEqual('7');
      });
    const req = httpTestingController.expectOne(
      'http://972c6e5d.ngrok.io/api/following'
    );

    req.flush(mockFollowing);
  });
});











});
