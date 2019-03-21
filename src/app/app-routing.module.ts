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
import { BookResolverService } from './book-resolver.service';



const routes: Routes = [
  {path:  '', pathMatch: 'full', redirectTo:  'login'},
  {path:'login',component: LogInComponent},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'book/:id' , component: BookInfoComponent},
  {path: 'profile/:id', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'followers', component: FollowersComponent,canActivate:[AuthGuard]},
  {path: 'following', component: FollowingComponent,canActivate:[AuthGuard]},
  {path: 'myBooks', component: MyBooksComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'login', pathMatch:'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
