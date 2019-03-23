import { RatingModule } from 'ng2-rating';
import { Component, OnInit, Input } from '@angular/core';
/**used for rating a certain book and displaying its rate */
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
