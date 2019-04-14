import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let selectedProfile;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it (' should show user profile' , () => {
   
    fixture.detectChanges();
     const titleElement: HTMLElement = fixture.debugElement.query( By.css('#userNameprofile')).nativeElement;
    expect(titleElement.innerText).toContain('killua zoldyck');
});


});
