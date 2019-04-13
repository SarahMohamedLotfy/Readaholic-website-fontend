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
  /*describe('#Get the followers', () => {
    it('returned Observable should match the right data', () => {
     
    const mockFollowers = [
      {
        "book_id": null,
        "book_image": null,
        "currently_reading": null,
        "id": 2,
        "image_link": "http://0f626498.ngrok.io/storage/avatars/ta7a.jpg",
        "name": "ta7a",
        "is_followed": 0,
        "pages": null
      },
      {
        "book_id": null,
        "book_image": null,
        "currently_reading": null,
        "id": 3,
        "image_link": "http://0f626498.ngrok.io/storage/avatars/waleed.jpg",
        "name": "waleed",
        "is_followed": 1,
        "pages": null
      }
    ];

    service.getfollowing()
      .subscribe(coursesData => {
        expect(followerComponent[0].name).toEqual('ta7a');
        expect(followerComponent[0].id).toEqual('2');
        expect(followerComponent[1].name).toEqual('waleed');
        expect(followerComponent[1].id).toEqual('3');
      });
    const req = httpTestingController.expectOne(
      'http://0f626498.ngrok.io/api/follower'
    );

    req.flush(mockFollowers);
  });*/



  fit('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
});
