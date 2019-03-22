import { updates } from './classes/updates';
import { TestBed, inject } from '@angular/core/testing';
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
let fakeUpdates: updates [] = [{  
  id: 2,
    body:null,
   rating:3,
   likes_count:null,
   comments_count:null,
   updated_at:"2019-03-21 00:00:00",
   book_id:1,
   title:"Young Pharos",
   description:"book description ",
   img_url:"https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg",
   reviews_count:null,
   ratings_count:null,
   ratings_avg:null,
   pages_no:null,
   user_id:2,
   name:"Sara",
   image_link:"https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg",
   author_name:"Taylor swift",
   update_type:"0",
   shelf:1,
   actionText:"FR",
   followed_image_link:"https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg"
  }];

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
afterEach((inject([HttpTestingController], (httpMock: HttpTestingController) => {
  httpMock.verify();
})) );

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
  fit('expects service to fetch updates ',
  inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      // We call the service
      service.getUpdates().subscribe(data => {
        expect(data.updates.length).toBe(10);
        expect(data.updates[0].update_type).toBe(0);
        expect(data.updates[0].name).toBe("Sara");
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/updates');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush({data: fakeUpdates});
    })
);
});
