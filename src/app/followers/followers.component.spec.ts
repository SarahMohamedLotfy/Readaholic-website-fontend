import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersComponent } from './followers.component';
import {FormsModule} from '@angular/forms'
//import { FilterPipe }from '../filter.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';

import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { StarComponent } from './../shared/star/star.component';
import { followerComponent } from '../classes/followerComponent';




fdescribe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersComponent,
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
    fixture = TestBed.createComponent(FollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

// Unit test for deletefollowing function check if the count of following peole decrease ?

  it('should be able to decrement the count (-1)', () => {

    component.delFollowing(7);
    expect(component.count).toEqual(5);
  });

  
  // Unit test for addfollowing function check if the count of following peole decrease ?

  it('should be able to increment the count (+1)', () => {

    component.add(7);
    expect(component.count).toEqual(6);
  });


// Unit test for search function
it('should be able to find the user', () => {

  component.searchText='waleed';
  expect(component.search).toEqual('waleed');
});


});
