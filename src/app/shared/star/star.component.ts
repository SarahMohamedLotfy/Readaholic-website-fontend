import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng2-rating';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnInit {
 @Input() starsCount: number;
 @Input() readOnly: boolean;
 floatEnable:boolean;

  constructor() { }

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
