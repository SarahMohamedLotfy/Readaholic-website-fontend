import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

fdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, NavbarComponent],
      imports: [
       HttpClientModule,
       RouterTestingModule,
       RouterModule,
       NgbRatingModule,
       FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it (' should show user profile' , () => {
    component.selectedProfile = {
    "id": 1,
     "name": "killua zoldyck",
     "user_name": 'killua_99',
      "link": '',
    "small_image_url": 'https://pbs.twimg.com/profile_images/955923907051184129/8LxKsoPl_400x400.jpg',
    "about": 'coolest kid ever ',
     "age": 14,
     "gender": 'male',
     "location": 'far away mountain',
      "joined": 'at 1999' ,
     "last_active": 'at 2011',
    "user_shelves":
     {"id": 2, "name": 'read', "book_count": 0}
    };
    fixture.detectChanges();
     const titleElement: HTMLElement = fixture.debugElement.query( By.css('#userNameprofile')).nativeElement;
    expect(titleElement.innerText).toContain('killua zoldyck');
});


});
