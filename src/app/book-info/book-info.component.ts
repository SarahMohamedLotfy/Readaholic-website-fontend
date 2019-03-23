import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { review } from '../classes/review';
import { book } from '../classes/book';
import { userBookInfo } from '../classes/userBookInfo';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  myBook: book;
  reviews: review[];
  userInfo: userBookInfo;
  isUser: boolean;

  constructor(private service: BookService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
  this.service.getBook(+this.route.snapshot.paramMap.get('id')).subscribe((data:book) => this.myBook = data, error=> this.router.navigateByUrl("/404"));
  this.service.getBookReviews().subscribe((data:review[]) => this.reviews = data);
  this.service.getUserBookInfo().subscribe(data=> this.userInfo = data)
  if(localStorage.getItem('token') == null){
    this.isUser = false;
  }
  else{
    this.isUser = true;
  }
  }
}
  

