
import { FollowingComponent } from './following.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';


import { RatingModule, Rating } from 'ng2-rating';
import {FormsModule} from '@angular/forms'
//import { FilterPipe }from '../filter.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { followingComponent } from '../classes/followingComponent';



fdescribe('FollowingComponent', () => {
  let component: FollowingComponent;
  let fixture: ComponentFixture<FollowingComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [FollowingComponent ,
      NavbarComponent ],
      imports:[
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        FormsModule

        ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  // Unit test for search function
  fit(' Search button clicked',fakeAsync(()=>{
    spyOn(component, 'search');
    let bt= fixture.debugElement.query(By.css('#searchfollowingg'));
      bt.triggerEventHandler('click',null);
  
    tick(); // simulates the passage of time until all pending asynchronous activities finish
     fixture.detectChanges();
      expect(component.search).toHaveBeenCalled();
  
  }));


/*it(' Unfollow button clicked',fakeAsync((id)=>{
        spyOn(component, 'delFollowing');
        let bt= fixture.debugElement.query(By.css('#stopfollow'));
          bt.triggerEventHandler('click',id);
        tick(); // simulates the passage of time until all pending asynchronous activities finish
         fixture.detectChanges();
          expect(component.delFollowing(id)).toHaveBeenCalled();
}));

fit('should', async(() => {
  spyOn(component, 'delFollowing');
  let button = fixture.debugElement.nativeElement.querySelector('#stopfollow');
  button.click();
  fixture.whenStable().then(() => {
      expect(component.delFollowing).toHaveBeenCalled();
  })
  alert(1);
}));






// Unit test for delete function check if the count of following peole decrease ?
it('should be able to decrement the count (-1)', () => {

  component.delFollowing(7);

  expect(component.count).toEqual(5);
});
// Unit test for deletefollowing function check if the count of following peole decrease ?

it('should be able to decrement the count (-1)', () => {

  component.delFollowing(7);
  expect(component.count).toEqual(5);
});*/


});


