import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { review } from '../classes/review';
import { book } from '../classes/book';
import { userBookInfo } from '../classes/userBookInfo';
import { BookService } from './book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



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

  /**book shelf */
  userShelf: number = 0;
  /**true if user mode false if guest mode */
  isUser: boolean;

  /**logged in user review on the book*/
  userReview: string = "";

  /**@ignore */
  shelfName: string = "--";

/**takes as parameters object of book service and activiated route to get the selected book id */
  constructor(private service: BookService, private route: ActivatedRoute,private router: Router,private modalService: NgbModal) {
  }

  /**gets the information of the selected book from the server and setes user mode or guest mode
   * and navigates to page not found if the user types a wrong book id
    */
  ngOnInit() {

    this.service.getBook(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
     //
     //this.myBook = data.
     this.myBook = data.pages[0];
     // console.log(data.page);
     // console.log(this.myBook.id);
      //console.log(this.myBook.image_url);
      if(Math.floor(this.myBook.ratings_avg) > this.myBook.ratings_avg-0.5)
      {
        this.myBook.ratings_avg = Math.floor(this.myBook.ratings_avg);
      }
      else
      {
        this.myBook.ratings_avg = Math.ceil(this.myBook.ratings_avg);
      }
    },(data)=>console.log(data));

  this.service.getUserBookInfo(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
    console.log(data);
    this.userInfo = data.pages[0];
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
  });


 this.service.getBookReviews(+this.route.snapshot.paramMap.get('id')).subscribe((data) => this.reviews = data.pages);




  if(localStorage.getItem('token') == null){
    this.isUser = false;
  }
  else{
    this.isUser = true;
  }
}

createReview () {
  console.log(this.userShelf);
 this.service.createReview(this.myBook.id,2,"ana nehal ya waleeed",4).subscribe(() => console.log("hhhhellooo"));
}

open() {
  document.getElementById("openModalButton").click();
  //this.modalService.open(e);
}


}

