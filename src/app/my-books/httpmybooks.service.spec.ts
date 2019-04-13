import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpmybooksService } from './httpmybooks.service';
import { followingComponent } from '../classes/followingComponent';

describe('HttpmybooksService', () => {
  let service: HttpmybooksService;
  let httpTestingController: HttpTestingController;
  



  it('should be created', () => {
    const service: HttpmybooksService = TestBed.get(HttpmybooksService);
    expect(service).toBeTruthy();
  });
});
