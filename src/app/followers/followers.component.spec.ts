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

import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { StarComponent } from './../shared/star/star.component';

import { NavbarComponent } from '../shared/navbar/navbar.component';



fdescribe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersComponent ],
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



  it('should show followers list ', () => {
    component.posts = {
    
        "id": 1,
        "name": "Huda Yahya",
        "image_url": "https://images.gr-assets.com/photos/1530363365p8/3711511.jpg",
        "bookid": 3,
        "bookname": "اخر ايام الارض ",
        "bookimage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471448936i/31544463._SX120_.jpg",
        "country": "Asuit,Egypt"
      
      
    };

    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#profilename')).nativeElement;
   expect(titleElement.innerText).toContain('Huda Yahya');
 });






});
