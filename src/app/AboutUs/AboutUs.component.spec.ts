import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComponent } from './AboutUs.component';


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



fdescribe('FollowingComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [AboutusComponent ,
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
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });


  





});


