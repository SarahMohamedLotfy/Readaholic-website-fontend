//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//import { RatingModule } from 'ng2-rating';

import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
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
  @Input() starsCount: number;

  /**detemines the state of the component whether it can be used to rate a book or display its average rate */
  @Input() readOnly: boolean;

  @Input() getRate:boolean=false;

  /**book shelf */
  @Input() shelf: number = 0;

  /**book id */
  @Input() bookId: number;

  /**@ignore */
  @Output() rated: EventEmitter<number> = new EventEmitter<number>();
  /**@ignore */
  shelfStatus: string;

  nehal: number;

  /**rate done by the user */
  userRate: number = 0;
  
  /**@param {BookService} service the http service which the star component uses to make a rating request */
  constructor(private service: BookService, private sharedService: SharedService, private shelfService:ShelfService) { }

  ngOnInit() {
    this.sharedService.currentshelf.subscribe(data => {
      this.shelf = data;


      
 
      if (this.shelf == 3) {
      
        this.starsCount = 0;
        this.userRate = 0;
        
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
        this.shelf = 0;
      }

      this.service.createReview(this.bookId, this.shelf, "", this.userRate).subscribe((data) => {
        console.log(data);
        if(data.shelfType == "read") {
          this.shelf = 0;
        } else if (data.shelfType == "currently-reading") {
          this.shelf = 1;
        } else {
          this.shelf = 2;
        } 
        this.rated.emit(this.userRate);
        console.log("star" + this.shelf);
        this.sharedService.changeShelf(this.shelf);
      });
    }
  }
}
