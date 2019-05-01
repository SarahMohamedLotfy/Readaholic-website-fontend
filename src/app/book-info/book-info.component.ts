import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { review } from '../classes/review';
import { book } from '../classes/book';
import { userBookInfo } from '../classes/userBookInfo';
import { BookService } from './book.service';
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';

/**component to show details of a specific book */
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  /**store information of the selected book */
  myBook: book;

  /**reviews array of the selectec book */
  reviews: review[];

  /**stores user related book info */
  userInfo:userBookInfo;

  /**true if user mode false if guest mode */
  isUser: boolean;

  /**@ignore */
  info: userBookInfo = {
    "body": "",
    "shelf_name": 0,
    "rating": 0
  };

  /**@ignore */
  shelfName:string = "";


/**
 * @param {BookService} service injected book service instance
 * @param {ActivatedRoute} route activated route instance
 * @param {Router} router router inastance to route by code 
 */
  constructor(private service: BookService, private route: ActivatedRoute,private router: Router) {
  }

  /** calss the needed requests to the get the selected book info  */
  ngOnInit() {

    this.service.getBook(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
     this.myBook = data.pages[0];
     console.log(data);
      if(Math.floor(this.myBook.ratings_avg) > this.myBook.ratings_avg-0.5)
      {
        this.myBook.ratings_avg = Math.floor(this.myBook.ratings_avg);
      }
      else
      {
        this.myBook.ratings_avg = Math.ceil(this.myBook.ratings_avg);
      }
    },()=> this.router.navigateByUrl("/pageNotfound"));

  this.service.getUserBookInfo(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {

    this.userInfo = data.pages[0];
    this.info = data.pages[0];
    if(this.userInfo.shelf_name == 0)
    {
      this.shelfName = "Read";
    }
    else if(this.userInfo.shelf_name == 1)
    {
      this.shelfName = "Currently Reading";
    }
    else if(this.userInfo.shelf_name == 2)
    {
      this.shelfName = "Want To Read";
    }
  }, (data)=> console.log(data));

 this.service.getBookReviews(+this.route.snapshot.paramMap.get('id')).subscribe((data) => this.reviews = data.pages);

  if(localStorage.getItem('token') == null){
    
    this.isUser = false;
  }
  else{
   
    this.isUser = true;
  }
}

/**calls the book service funstion to create a review */
createReview () {
 this.service.createReview(this.myBook.id,this.info.shelf_name,this.info.body,this.info.rating).subscribe((data) => {this.userInfo = data.pages; console.log(data);});
}

/**
 * opens the review model when the user rates a book
 * @param {number} rate The output rate from the star component
 */
open(rate: number) {
  this.info.rating = rate;
  if(!this.userInfo) {
    document.getElementById("openModalButton").click();
  }
}

}
