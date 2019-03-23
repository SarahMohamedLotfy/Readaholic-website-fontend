/* import { updates } from './classes/updates';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { profile } from './classes/profile';
import { AppComponent } from './app.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

//fdescribe


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



});*/
