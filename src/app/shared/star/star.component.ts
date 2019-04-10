//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//import { RatingModule } from 'ng2-rating';

import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {
  /**displayed rate */
 @Input() starsCount: number;

 /**detemines the state of the component whether it can be used to rate a book or display its average rate */
 @Input() readOnly: boolean;

 /**the rate done by the user */
  userRate: number;

  constructor() { }

  ngOnChanges() {
    if(this.readOnly === true)
    {
      if((Math.floor(this.starsCount)) > (this.starsCount-0.5))
      {
        this.starsCount = Math.floor(this.starsCount);
      }  
      else
      {
        this.starsCount = Math.ceil(this.starsCount);
      }
    } 
  }

  onRating() {
  
}
}
