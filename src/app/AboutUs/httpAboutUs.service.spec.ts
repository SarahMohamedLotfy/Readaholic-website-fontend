import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { aboutusService } from './httpAboutUs.service';
import { followingComponent } from '../classes/followingComponent';

fdescribe('aboutusService', () => {
  let service: aboutusService;
  let httpTestingController: HttpTestingController;
  

  beforeEach( () =>  {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [aboutusService],
  });
  service = TestBed.get(aboutusService);
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  fit('should be created', () => {
    const service: aboutusService = TestBed.get(aboutusService);
    expect(service).toBeTruthy();
  });
});
