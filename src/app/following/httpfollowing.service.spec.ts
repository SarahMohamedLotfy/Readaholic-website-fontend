import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpFollowinggService } from './httpfollowing.service';
import { followingComponent } from '../classes/followingComponent';

fdescribe('HttpFollowingService', () => {
  let service: HttpFollowinggService;
  let httpTestingController: HttpTestingController;
  



  fit('should be created', () => {
    const service: HttpFollowinggService = TestBed.get(HttpFollowinggService);
    expect(service).toBeTruthy();
  });
});
