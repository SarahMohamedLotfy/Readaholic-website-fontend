import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { review } from '../classes/review';
import { book } from '../classes/book';
import { userBookInfo } from '../classes/userBookInfo';
import { BookService } from './book.service';
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';
import { user } from '../classes/user';
import { ShelfService } from '../shared/dropdown/shelf.service';
import { userInfo } from 'os';

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
  userInfo: userBookInfo;

  /**true if user mode false if guest mode */
  isUser: boolean;

  /**true if user didn't write a review, false other wise */
  noBody: boolean = false;

  /**@ignore */
  reviewId = -1;
   /**@ignore */
  reviewShelf = 0;
   /**@ignore */
  reviewBody = "";
   /**@ignore */
  reviewRating = 0;
  /**@ignore */
  shelfName: string = "";
  /**@ignore */
  modelShelf: string = "read";


  /**
   * @param {BookService} service injected book service instance
   * @param {ActivatedRoute} route activated route instance
   * @param {Router} router router inastance to route by code 
   */
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router, private shelfService: ShelfService) {
  }

  /** calss the needed requests to the get the selected book info  */
  ngOnInit() {
    this.getBookInfo();
    this.getBookReviews();
    this.getUserInfo();

    if (localStorage.getItem('token') == null) {
      this.isUser = false;
    }
    else {
      this.isUser = true;
    }
    //document.getElementById("openModalButton").click();
  }

  /**get the selected book information */
  getBookInfo() {
    this.service.getBook(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        // console.log(data)

        this.myBook = data.pages[0];
      
        console.log(this.myBook.title);

        

        if (Math.floor(this.myBook.ratings_avg) > this.myBook.ratings_avg - 0.5) {
          this.myBook.ratings_avg = Math.floor(this.myBook.ratings_avg);
        }
        else {
          this.myBook.ratings_avg = Math.ceil(this.myBook.ratings_avg);
        }
      }, (data) => console.log(data));
    //,()=> this.router.navigateByUrl("/pageNotfound")
  }

  /**gets the selected book reviews */
  getBookReviews() {
    this.service.getBookReviews(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data) => this.reviews = data.pages);
  }

  /**gets user related book information */
  getUserInfo() {
    this.shelfService.getUserBookInfo(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.userInfo = data.pages[0];

      this.reviewId = this.userInfo.id;
      this.reviewBody = this.userInfo.body;
      this.reviewShelf = this.userInfo.shelf_name;
      this.reviewRating = this.userInfo.rating;

      if (this.userInfo.shelf_name == 0) {
        this.shelfName = "Read";
      }
      else if (this.userInfo.shelf_name == 1) {
        this.shelfName = "Currently Reading";
      }
      else if (this.userInfo.shelf_name == 2) {
        this.shelfName = "Want To Read";
      }
    });
  }


  /**calls the book service funstion to create a review */
  review() {
    console.log(this.userInfo.body);
    if(this.reviewBody != "") {
      console.log(this.myBook.id);
      this.service.createReview(this.myBook.id, this.reviewShelf, this.reviewBody, this.reviewRating)
      .subscribe((data) => { 
        this.userInfo.id = data.Review_id;
        this.userInfo.body = data.bodyOfReview
        this.userInfo.rating = data.rate
        this.userInfo.shelf_name = 0;

        this.reviewId = this.userInfo.id;
      this.reviewBody = this.userInfo.body;
      this.reviewShelf = this.userInfo.shelf_name;
      this.reviewRating = this.userInfo.rating;

        document.getElementById("closebtn").click();
       });
    }
    else {
      this.noBody = true;
    }
  }

  /**
   * opens the review model when the user rates a book
   * @param {number} rate The output rate from the star component
   */
  open(rate: number) {
    if (!this.userInfo || rate > 5) {
        document.getElementById("openModalButton").click();
    }
    else if(rate <= 5) {
      this.reviewRating = rate;
    }
  }

  openShelves() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  filterFunction() {
    var input, filter, a, i, text;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    var div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      text = a[i].textContent || a[i].innerText;
      if (text.toUpperCase().indexOf(filter) == 0) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
}
