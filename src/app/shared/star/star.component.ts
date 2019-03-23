import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng2-rating';
<<<<<<< HEAD
import { Component, OnInit, Input, NgModule } from '@angular/core';

=======
import { Component, OnInit, Input } from '@angular/core';
/**used for rating a certain book and displaying its rate */
>>>>>>> a84b38f26565b7a2db4a87591b64757b1c8f756f
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnInit {
  /**displayed rate */
 @Input() starsCount: number;
 /**@ignore */
 @Input() readOnly: boolean;
 /**@ignore */
 floatEnable:boolean;

  constructor() { }

  /**sets rating mode or displaying mode */
  ngOnInit() {
    if(this.readOnly === true)
    {
      this.floatEnable = true;
    } 
    else
    {
      this.floatEnable = false;
    }
  }

}
