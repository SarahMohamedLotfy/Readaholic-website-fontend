import { RatingModule, Rating } from 'ng2-rating';


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { notifications } from 'src/app/classes/notifications';
import { data } from 'src/app/classes/data';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,
         ],
      imports:[
        RatingModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        
        ],
        providers: [ ],
        schemas: [ NO_ERRORS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
 fit('should contain unfollow',async()=>{
    const fakedata:data[]=[{
        
        user_id:1,
        
    user_name:null,
     
    user_image_link:null,
    review_id:null,
  
    review_user_id:2,
    
    review_user_name:null,
     book_title: null,
     
      type:2,
      
      book_id:2,
     }]
  const fakenotifs: notifications[]  = [{
    n_id:2,
    read:1,
    data:fakedata[0],

    you:true,
    message:null
    }];
    
    component.notifs=fakenotifs ;
    const De: DebugElement = fixture.debugElement;
    const notiftext = De.query(By.css('#notiftext'));
    const p: HTMLElement = notiftext.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(p.textContent).toContain('followed you');

 })
})

})
