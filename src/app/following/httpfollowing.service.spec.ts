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
fdescribe('#Get the following people', () => {
  it('returned Observable should match the right data', () => {
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
        "pages": null

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
      'http://ec2-52-90-5-77.compute-1.amazonaws.com/api/following'
    );

    req.flush(mockFollowing);
  });
});











});
