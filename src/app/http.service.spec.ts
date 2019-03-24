 import { updates } from './classes/updates';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { profile } from './classes/profile';
import { AppComponent } from './app.component';
import {followingComponent} from './classes/followingComponent';
import { followerComponent } from './classes/followerComponent';

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






  describe('HttpService', () => {
    let httpService: HttpService;
    let httpTestingController: HttpTestingController;
    let testFollower: followerComponent [] = [{
      "id": 1,
      "name": "Huda Yahya",
      "image_url": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
    },
    {
      "id": 2,
      "name": "Ahmed Elsayed",
      "image_url": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
    },
    {
      "id": 3,
      "name": "Mohamed Hayalla",
      "image_url": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
    },
    {
      "id": 4,
      "name": "Walid Hassan",
      "image_url": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
    },
    {
      "id": 5,
      "name": "Kamal Shaker",
      "image_url": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
    },
    {
      "id": 6,
      "name": "Eslam Ahmed",
      "image_url": "https://images.gr-assets.com/photos/1551961617p8/3783093.jpg",
    }
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


  });

  it('should get followingList', () => {
    httpService.getfollowing().subscribe(
      (data: followingComponent[]) => {
        expect(data.length).toBe(6);

      });
    let followingRequest: TestRequest = httpTestingController.expectOne('http://my-json-server.typicode.com/SarahMohamedLotfy/followlast/following');
    expect(followingRequest.request.method).toEqual('GET');
    followingRequest.flush(testFollowing);

    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();

 });
 it('should get followingList', () => {
  httpService.getfollowers().subscribe(
    (data: followingComponent[]) => {
      expect(data.length).toBe(6);

    });
  let followerRequest: TestRequest = httpTestingController.expectOne('https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following');
  expect(followerRequest.request.method).toEqual('GET');
  followerRequest.flush(testFollower);

  const service: HttpService = TestBed.get(HttpService);
  expect(service).toBeTruthy();

});
  /*fit('expects service to fetch updates ',
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
);*/
/**});
});
}); */
});
 

});});})

