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
fdescribe('HttpService', () => {
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


fdescribe('HttpService', () => {
  let httpService: HttpService;
  let httpTestingController: HttpTestingController;
  let testFollowing: followingComponent [] = [{
    "id": 1,
    "name": "Huda Yahya",
    "image_url": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
    "bookid": 3,
    "bookname": "اخر ايام الارض ",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471448936i/31544463._SX120_.jpg"
  },
  {
    "id": 2,
    "name": "Ahmed Elsayed",
    "image_url": "https://images.gr-assets.com/photos/1523534805p8/3689876.jpg",
    "bookid": 8,
    "bookname": "Deathcaster - Shattered Realms",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529823092i/39320115._SY180_.jpg"
  },
  {
    "id": 3,
    "name": "Mohamed Hayalla",
    "image_url": "https://images.gr-assets.com/authors/1551668618p5/5010669.jpg",
    "bookid": 7,
    "bookname": "A Tale of Two Cities",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310124698i/9847899._SY180_.jpg"
  },
  {
    "id": 4,
    "name": "Walid Hassan",
    "image_url": "https://images.gr-assets.com/users/1503461635p8/70530862.jpg",
    "bookid": 2,
    "bookname": "Stormcaster-Shattered Realms",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500578312i/33816845._SY180_.jpg"
  },
  {
    "id": 5,
    "name": "Kamal Shaker",
    "image_url": "https://images.gr-assets.com/photos/1517756015p8/3669409.jpg",
    "bookid": 6,
    "bookname": "حكاية الاسم الجيديد",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377934260i/18400361._SX120_.jpg"
  },
  {
    "id": 6,
    "name": "Eslam Ahmed",
    "image_url": "https://images.gr-assets.com/photos/1551961617p8/3783093.jpg",
    "bookid": 5,
    "bookname": "شاى بالنعناع ",
    "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309610934i/11922284._SX120_.jpg"
  }
  ];

/*let fakeUpdates: updates [] = [{
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
  }];*/

  fdescribe('HttpService', () => {
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
fit('should get auth profile', () => {
     httpService.getUserprofile(2).subscribe(
       (data: profile[]) => {
         expect(data.length).toBe(2);
       });
     let profileRequest: TestRequest = httpTestingController.expectOne('http://localhost:3000/profile/2');
     expect(profileRequest.request.method).toEqual('GET');
     profileRequest.flush(testProfiles);


  });

  fit('should get followingList', () => {
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
 fit('should get followingList', () => {
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
);*/
});
});
});
