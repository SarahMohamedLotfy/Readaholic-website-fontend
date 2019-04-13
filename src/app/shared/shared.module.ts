import { AppRoutingModule } from './../app-routing.module';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
//import {RatingModule} from "ng2-rating";

import { StarComponent } from './star/star.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikesComponent } from './likes/likes.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    StarComponent,
    DropdownComponent,
    NavbarComponent,
    LikesComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
   // RatingModule,
    FormsModule,
    NgbModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    ReactiveFormsModule
>>>>>>> b8e4d8029e95b3e0fe434def682186f1583db578
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent,
    NavbarComponent,
    LikesComponent,
    CommentsComponent

  ]
})
export class SharedModule { }
