import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { profile } from './classes/profile';
import { AppComponent } from './app.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

//fdescribe
describe('HttpService', () => {
let httpService: HttpService;
let httpTestingController: HttpTestingController;

let testProfiles: profile [] = [{id: 1, name: 'killua zoldyck', user_name: 'killua_99', link: '',
small_image_url: 'https://pbs.twimg.com/profile_images/955923907051184129/8LxKsoPl_400x400.jpg',
about: 'coolest kid ever ', age: 14, gender: 'male', location: 'far away mountain', joined: 'at 1999' , last_active: 'at 2011',
user_shelves: {id: 2, name: 'read', book_count: 0}},

{id: 2, name: 'silva zoldyck' , user_name: 'killua_99', link: '',
small_image_url: 'https://pbs.twimg.com/profile_images/955923907051184129/8LxKsoPl_400x400.jpg',
about: 'coolest father ever ', age: 40, gender: 'male', location: 'far away mountain', joined: 'at 1999' , last_active: 'at 2011',
user_shelves: {id: 2, name: 'read', book_count: 0}}
];
beforeEach(() => {
   TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [HttpService],
    //declarations:[ AppComponent]
    //schemas: [ NO_ERRORS_SCHEMA  ]

     });
   httpService = TestBed.get(HttpService);
   httpTestingController = TestBed.get(HttpTestingController);

 });

afterEach(() => {
  httpTestingController.verify();
});
//fit
it('should get auth profile', () => {
     httpService.getUserprofile(2).subscribe(
       (data: profile[]) => {
         expect(data.length).toBe(2);
       });
     let profileRequest: TestRequest = httpTestingController.expectOne('http://localhost:3000/profile/2');
     expect(profileRequest.request.method).toEqual('GET');
     profileRequest.flush(testProfiles);

     const service: HttpService = TestBed.get(HttpService);
     expect(service).toBeTruthy();

  });
});
