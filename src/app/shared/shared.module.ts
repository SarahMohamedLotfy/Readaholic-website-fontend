import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RatingModule} from "ng2-rating";

import { StarComponent } from './star/star.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [ 
    StarComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent
    
  ]
})
export class SharedModule { }
