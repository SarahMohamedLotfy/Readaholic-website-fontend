import { FilterPipe } from './filter.pipe';
import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http' ;
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
 { path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path:'home', component: HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'followers',component:FollowersComponent},
  {path:'following',component:FollowingComponent},
  {path:'myBooks',component:MyBooksComponent},
  
   
];



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    ProfileComponent,
    FollowingComponent,
    FollowersComponent,
    MyBooksComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
   RouterModule.forRoot(routes),
  SharedModule,
    AppRoutingModule
    
    
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
