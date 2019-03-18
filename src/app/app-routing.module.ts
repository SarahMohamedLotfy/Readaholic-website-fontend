import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo:  'login'},
  {path:'login',component: LogInComponent},  
   {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
   
   {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
   {path: 'followers', component: FollowersComponent,canActivate:[AuthGuard]},
   {path: 'following', component: FollowingComponent,canActivate:[AuthGuard]},
   {path: 'myBooks', component: MyBooksComponent,canActivate:[AuthGuard]},
   {path: '**', redirectTo: 'login', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
