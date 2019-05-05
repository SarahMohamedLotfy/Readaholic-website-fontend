//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//import { RatingModule } from 'ng2-rating';

import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { BookService } from 'src/app/book-info/book.service';

import { SharedService } from 'src/app/shared.service';
import { ShelfService } from '../dropdown/shelf.service';

/**used to rate a book or display user rate on the book */

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  /**displayed rate */
  @Input() starsCount: number = 0;

  /**detemines the state of the component whether it can be used to rate a book or display its average rate */
  @Input() readOnly: boolean;

  /**@ignore */
  @Input() getRate:boolean=false;

  /**book shelf */
  @Input() shelf: number = 0;

  /**book id */
  @Input() bookId: number;

  /**emitted event when the rating is done */

  @Output() rated: EventEmitter<number> = new EventEmitter<number>();

  /**the displayed shelf */
  shelfStatus: string;

  /**@ignore */
  keepRate: number;

  /**
   * constructor that takes in the passes parameters 
   * @param service service the http service which the star component uses to make a rating request
   * @param sharedService a shared service to communicate between bookInfoComponent, starComponent, dropdwonComponent
   * @param shelfService http service to get user ralted info
   */
  constructor(private service: BookService, private sharedService: SharedService, private shelfService:ShelfService) { }

  /**subscribes to the current shelf id */
  ngOnInit() {
    this.sharedService.currentShelf.subscribe(data => {
      if (data.key != -1 && data.value != -1) {
        if (data.key == this.bookId) {
          this.shelf = data.value;
          if (this.shelf == 3) {
            this.starsCount = 0;
          }
        }
      }
    });
    if(this.getRate)
    {
      this.shelfService.getUserBookInfo(this.bookId).subscribe((data) => {
        this.starsCount=data.pages[0].rating;
        console.log(this.starsCount);
      },err=>{this.starsCount=0;})

    }
  }

  /**rates a book when the user clicks on the stars */
  onClick() {
    if (this.readOnly == false) {
      if (this.shelf == 4 || !this.shelf) {
        this.shelf = 3;
      }
      this.keepRate = this.starsCount;
      this.service.createReview(this.bookId, this.shelf, "", this.starsCount).subscribe((data) => {
        if (data.shelfType == "read") {
          this.shelf = 0;
        } else if (data.shelfType == "currently-reading") {
          this.shelf = 1;
        } else {
          this.shelf = 2;
        }
        this.rated.emit(this.starsCount);
       
        this.sharedService.changeShelf(this.bookId, this.shelf);
      },() => this.starsCount = 0);
    }
  }
}
