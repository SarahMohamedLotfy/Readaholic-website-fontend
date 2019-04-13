import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowingService } from './httpfollower.service';
import { followerComponent } from '../classes/followerComponent';

describe('HttpFollowingService', () => {
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




 


  it('should be created', () => {
    const service: HttpFollowingService = TestBed.get(HttpFollowingService);
    expect(service).toBeTruthy();
  });
});
