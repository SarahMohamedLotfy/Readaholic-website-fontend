import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ListLikesService } from './list-likes.service';
import { ListLikesComponent } from './list-likes.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('ListLikesService', () => {
  let mocklistLikesService;
  let fixture: ComponentFixture<ListLikesComponent>;
  let component: ListLikesComponent;

  mocklistLikesService = jasmine.createSpyObj(['reload'])

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLikesComponent,
      NavbarComponent ],
      imports:[
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        FormsModule,
        SharedModule

                ],
        providers: [
          //{ provide: SharedService, useValue: mockSharedService},
          { provide:ListLikesComponent , useValue: mocklistLikesService},
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })

    .compileComponents();

    mocklistLikesService.reload.and.returnValue(of(
      [{
        "username": " test",
        "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "id": 1,
        "user_id":1,
        "have_the_like": "Yes"
      },{
        "username": " mai",
        "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "id": 2,
        "user_id":2,
        "have_the_like": "Yes"
      },
      {
        "username": " user",
        "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "id": 3,
        "user_id":3,
        "have_the_like": "Yes"
      },
      {
        "username": " test",
        "image_link": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "id": 4,
        "user_id":4,
        "have_the_like": "Yes"
      }
    ]

    ));

  it('should be created', () => {
    const service: ListLikesService = TestBed.get(ListLikesService);
    expect(service).toBeTruthy();
  });
  it(('should get list likes correctly'),()=>{
          fixture.componentInstance.reload();
          let bt= fixture.debugElement.query(By.css('button#btnLink'));
          bt.triggerEventHandler('click',null);

          expect(mocklistLikesService.reload).toHaveBeenCalledWith("test","https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",1,1,"Yes"
          );
        });
  }));


});
