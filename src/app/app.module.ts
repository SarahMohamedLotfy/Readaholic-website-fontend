import { RatingModule } from 'ng2-rating';
import { FilterPipe } from './filter.pipe';
import { HttpService } from './http.service';
import { HttpFollowingService } from '../app/followers/httpfollower.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BookInfoComponent } from './book-info/book-info.component';
import {AboutusComponent} from './AboutUs/AboutUs.component';
import {SearchPeopleComponent} from './search-people/searchpeople.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { AuthInterceptor } from './auth.interceptor';
import { PageNotFoundComponent } from './page-not-found.component';
import { fakeBackendProvider } from './fake-backend';
import { LogInHttpService } from './log-in/log-in-http.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SharedService } from './shared.service';





@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    ProfileComponent,
    FollowingComponent,
    FollowersComponent,
    MyBooksComponent,
    BookInfoComponent,
    LogInComponent,
    AboutusComponent,
    PageNotFoundComponent,
    AccountSettingsComponent,

    ForgetPasswordComponent,

    SearchBooksComponent,
    SearchPeopleComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    SharedModule,

    ReactiveFormsModule,
    RatingModule,
    RouterModule



  ],



  providers: [HttpService, LogInHttpService, { provide: LocationStrategy, useClass: HashLocationStrategy }

    , {
      provide: HTTP_INTERCEPTORS,

      useClass: AuthInterceptor,
      multi: true
    }, SharedService],

  bootstrap: [AppComponent]
})


export class AppModule { }
