//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//import { RatingModule } from 'ng2-rating';

import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { BookService } from 'src/app/book-info/book.service';

import {MyBooksComponent } from 'src/app/my-books/my-books.component'

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

  /**@param {BookService} service the http service which the star component uses to make a rating request */
  constructor(private service: BookService, private sharedService: SharedService, private shelfService:ShelfService) { }

  ngOnInit() {

    if (this.starsCount == null) {
      console.log("yalahwaaay1111")
    }
    this.sharedService.currentshelf.subscribe(data => {
      if (data.key != -1 && data.value != -1) {
        if (data.key == this.bookId) {
          this.shelf = data.value;
          if (this.shelf == 3) {
            console.log("yalahwaaay")
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
      console.log(this.starsCount)
      if (this.shelf == 4 || !this.shelf) {
        this.shelf = 3;
      }

      this.service.createReview(this.bookId, this.shelf, "", this.starsCount).subscribe((data) => {
        console.log(data);
        if (data.shelfType == "read") {
          this.shelf = 0;
        } else if (data.shelfType == "currently-reading") {
          this.shelf = 1;
        } else {
          this.shelf = 2;
        }
        this.rated.emit(this.starsCount);
        console.log("star" + this.shelf);
        this.sharedService.changeShelf(this.bookId, this.shelf);
      }, (data) => console.log(data));
    }
  }
}
