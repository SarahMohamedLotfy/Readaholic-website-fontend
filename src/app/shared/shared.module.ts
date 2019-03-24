import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RatingModule} from "ng2-rating";

import { StarComponent } from './star/star.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ 
    StarComponent,
    DropdownComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    NgbRatingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent,
    NavbarComponent
    
  ]
})
export class SharedModule { }
