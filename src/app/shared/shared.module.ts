import { AppRoutingModule } from './../app-routing.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from "ng2-rating";
import { StarComponent } from './star/star.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikesComponent } from './likes/likes.component';
import { CommentsComponent } from './comments/comments.component';
import { ListLikesComponent } from './list-likes/list-likes.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from '../review/review.component';


//import { SharedService } from '../shared.service';

@NgModule({
  declarations: [
    StarComponent,
    DropdownComponent,
    NavbarComponent,
    LikesComponent,
    CommentsComponent,
    ListLikesComponent
  ],
  imports: [


    CommonModule,
  RatingModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule

  ],
  exports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent,
    NavbarComponent,
    LikesComponent,
    CommentsComponent,
    ListLikesComponent,
    NavbarComponent
  ]


})
export class SharedModule { }
