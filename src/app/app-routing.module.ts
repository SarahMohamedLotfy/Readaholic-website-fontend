import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';
import { BookInfoComponent } from './book-info/book-info.component';
import  { PageNotFoundComponent }  from './page-not-found.component' ;
import  { AboutusComponent} from './AboutUs/AboutUs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import {SearchPeopleComponent} from './search-people/searchpeople.component';


const routes: Routes = [
  {path:  '', pathMatch: 'full', redirectTo:  'login'},
  {path:'login',component: LogInComponent},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'searchBooks',component: SearchBooksComponent},
  {path: 'book/:id' , component: BookInfoComponent,canActivate:[AuthGuard]},
  {path:'forgetPassword',component: ForgetPasswordComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'accountSettings', component: AccountSettingsComponent,canActivate:[AuthGuard]},
  {path: 'followers', component: FollowersComponent,canActivate:[AuthGuard]},
  {path: 'following', component: FollowingComponent,canActivate:[AuthGuard]},
  {path: 'searchpeople', component: SearchPeopleComponent,canActivate:[AuthGuard]},
  {path: 'myBooks', component: MyBooksComponent,canActivate:[AuthGuard]},
  {path: 'Aboutus', component: AboutusComponent,canActivate:[AuthGuard]},
  {path:'pageNotfound',component: PageNotFoundComponent},
  {path: '**', redirectTo: 'pageNotfound', pathMatch:'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
