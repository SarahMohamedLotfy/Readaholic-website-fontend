//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//import { RatingModule } from 'ng2-rating';

import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import { BookService } from 'src/app/book-info/book.service';

/**used to rate a book or display user rate on the book */
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {
  /**displayed rate */
 @Input() starsCount: number;

 /**detemines the state of the component whether it can be used to rate a book or display its average rate */
 @Input() readOnly: boolean;

 /**book shelf */
 @Input() shelf;

 /**book id */
 @Input() bookId : number;

 /**@ignore */
 @Output() rated:EventEmitter<number> = new EventEmitter<number>();

/**rate done by the user */
userRate: number = 0;
  /**@param {BookService} service the http service which the star component uses to make a rating request */
  constructor(private service: BookService) { }

  ngOnInit() {
   
  }
  
  /**rates a book when the user clicks on the stars */
  onClick() {
    if(this.readOnly == false) {
      if(!this.shelf) {
        this.shelf = 3;
      }
      this.service.createReview(this.bookId,this.shelf,"",this.userRate).subscribe(() => this.rated.emit(this.userRate));
    }
  }
}
