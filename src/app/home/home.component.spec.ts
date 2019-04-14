import { RatingModule, Rating } from 'ng2-rating';
import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { StarComponent } from './../shared/star/star.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { updates } from '../classes/updates';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        DropdownComponent,
        NavbarComponent,
        StarComponent ],
      imports:[
        RatingModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        
        ],
        providers: [StarComponent ],
        schemas: [ NO_ERRORS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 fit('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should follow and unfollow',async()=>{
  const fakeUpdates: updates[]  = [{
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
     update_type: 2,
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
    component.updatess=fakeUpdates ;
    const De: DebugElement = fixture.debugElement;
    const follow = De.query(By.css('#followButton'));
    const p: HTMLElement = follow.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getQuote
    //  fixture.detectChanges();        // update view with quote
      expect(p.textContent).toContain('Unfollow');

 })
})
})
