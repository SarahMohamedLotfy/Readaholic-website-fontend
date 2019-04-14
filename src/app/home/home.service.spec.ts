import { updates } from '../classes/updates';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { AppComponent } from '../app.component';
import { HttpRequest } from '@angular/common/http';

// import { NO_ERRORS_SCHEMA } from '@angular/core';

//fdescribe
fdescribe('HomeService', () => {
let service: HomeService;
let httpTestingController: HttpTestingController;



beforeEach(() => {
   TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [HomeService],
    //declarations:[ AppComponent]
    //schemas: [ NO_ERRORS_SCHEMA  ]

     });
  service = TestBed.get(HomeService);
   httpTestingController = TestBed.get(HttpTestingController);

 });

afterEach(() => {
  httpTestingController.verify();

});


  fit('expects service to fetch updates ',() => {
      // We call the service
      const fakeUpdates: updates [] = [{
        id: 2,
          body:null,
         rating:3,
         likes_count:null,
         comments_count:null,
         updated_at:"2019-03-21 00:00:00",
         book_id:1,
         title:"DeathCaster",
         description:"book description ",
         img_url:"",
         reviews_count:null,
         ratings_count:null,
         ratings_avg:null,
         pages_no:null,
         user_id:1,
         name:"Huda Yahyaa",
         image_link:"",
         author_name:"Huda Yahyaa",
         update_type: 0,
         shelf:1,
         actionText:"FR",
         followed_image_link:"",
         followed_name:null,
         followed_id:null,
         shelf_type:1,
         rev_user_id:1,
         rev_user_imageLink:"",
         rev_user_image:"",
         auth_user_following:1


        }];
      service.getUpdates().subscribe((updatesData : updates[])=> {
       expect(updatesData[0].update_type).toEqual(0);
       expect(updatesData[0].name).toEqual('Huda Yahyaa');
      });
      let updatesRequest: TestRequest = httpTestingController.expectOne('http://972c6e5d.ngrok.io/api/updates');
      expect(updatesRequest.request.method).toEqual('GET');
      updatesRequest.flush(fakeUpdates);


      expect(service).toBeTruthy();
    })
    it('should be called with proper arguments', () => {
      const responseForm = '<form />';
      const homeService = TestBed.get(HomeService);
      const http = TestBed.get(HttpTestingController);
      let followResponse;
    
      homeService.addFollowing(5).subscribe((response) => {
        followResponse = response;
      });
    
      http.expectOne({
        url: 'http://972c6e5d.ngrok.io/api/follow',
        method: 'POST'
      }).flush(responseForm);
      expect(followResponse).toEqual(responseForm);
    });
})
