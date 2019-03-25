import { RatingModule, Rating } from 'ng2-rating';
import { DropdownComponent } from './../shared/dropdown/dropdown.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { StarComponent } from './../shared/star/star.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
        NgbRatingModule
        ]
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
 
});
