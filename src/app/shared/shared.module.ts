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
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    DropdownComponent,
    NavbarComponent
    
  ]
})
/**manges the shared components between the app and exports the shared angular modules */
export class SharedModule { }
