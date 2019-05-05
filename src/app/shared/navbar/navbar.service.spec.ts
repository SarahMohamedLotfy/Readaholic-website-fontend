
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';

import { HttpRequest } from '@angular/common/http';
import { navBarService } from './navbar.service';
import { notifications } from 'src/app/classes/notifications';

// import { NO_ERRORS_SCHEMA } from '@angular/core';

//fdescribe
describe('navBarService', () => {
let service: navBarService;


let httpTestingController: HttpTestingController;



beforeEach(() => {
   TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [navBarService],
    //declarations:[ AppComponent]
    //schemas: [ NO_ERRORS_SCHEMA  ]

     });
  service = TestBed.get(navBarService);
   httpTestingController = TestBed.get(HttpTestingController);

 });

afterEach(() => {
  httpTestingController.verify();

});


  it('expects service to get notifications ',() => {
      // We call the service
      const fakenotifs: notifications [] = [{
      n_id:2,
      read:1,
      data:null,
      you:true,
      message:null

        }];
      service.getNotifications().subscribe((notifsData : notifications[])=> {
       expect(notifsData[0].n_id).toEqual(2);
       expect(notifsData[0].read).toEqual(1);
      });
      let notifsRequest: TestRequest = httpTestingController.expectOne('http://ec2-52-90-5-77.compute-1.amazonaws.co/api/updates');
      expect(notifsRequest.request.method).toEqual('GET');
      notifsRequest.flush(fakenotifs);


      expect(service).toBeTruthy();
    })
   
})