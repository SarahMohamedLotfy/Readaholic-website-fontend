//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import {RatingModule} from "ng2-rating";

import { StarComponent } from './star/star.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ 
    StarComponent,
    DropdownComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
   // RatingModule,
    FormsModule,
    NgbModule
    
  ],
  exports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent,
    NavbarComponent,
    
    
  ]
})
export class SharedModule { }
