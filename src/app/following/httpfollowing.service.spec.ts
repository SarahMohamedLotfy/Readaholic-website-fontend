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











});
