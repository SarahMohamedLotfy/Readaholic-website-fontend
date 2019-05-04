import { StarComponent } from "./star.component";
import { BookService } from 'src/app/book-info/book.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogInComponent } from 'src/app/log-in/log-in.component';
import { HomeComponent } from 'src/app/home/home.component';
import { SearchBooksComponent } from 'src/app/search-books/search-books.component';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';
import { ForgetPasswordComponent } from 'src/app/forget-password/forget-password.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { AccountSettingsComponent } from 'src/app/account-settings/account-settings.component';
import { FollowersComponent } from 'src/app/followers/followers.component';
import { FollowingComponent } from 'src/app/following/following.component';
import { SearchPeopleComponent } from 'src/app/search-people/searchpeople.component';
import { MyBooksComponent } from 'src/app/my-books/my-books.component';
import { AboutusComponent } from 'src/app/AboutUs/AboutUs.component';
import { ReviewComponent } from 'src/app/review/review.component';
import { PageNotFoundComponent } from 'src/app/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { By } from '@angular/platform-browser';

fdescribe("star component", () => {
  let fixture: ComponentFixture<StarComponent>;
  let mockService;

  mockService = jasmine.createSpyObj(['createReview']);

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        StarComponent,
        LogInComponent,
        HomeComponent,
        SearchBooksComponent,
        BookInfoComponent,
        ForgetPasswordComponent,
        ProfileComponent,
        AccountSettingsComponent,
        FollowersComponent,
        FollowingComponent,
        SearchPeopleComponent,
        MyBooksComponent,
        AboutusComponent,
        ReviewComponent,
        PageNotFoundComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: BookService, useValue: mockService },
        SharedService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    mockService.createReview.and.returnValue(of({shelfType: "read"}));

    fixture = TestBed.createComponent(StarComponent);
  })

  fit(('should be created'), () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  fit(('should rate the selected book'), () => {
    fixture.componentInstance.bookId = 4;
    fixture.componentInstance.readOnly = false;
    fixture.componentInstance.shelf = 1;
    fixture.componentInstance.starsCount= 5;
    
    fixture.detectChanges();

    let bt= fixture.debugElement.query(By.css('.comp'));
    bt.triggerEventHandler('click',null);

    expect(mockService.createReview).toHaveBeenCalledWith(4,1,"",5);
  })
});
