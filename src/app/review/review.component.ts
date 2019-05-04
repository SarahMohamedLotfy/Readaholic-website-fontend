import { user } from './../classes/user';
import { AppRoutingModule } from '../app-routing.module';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { LogInHttpService } from 'src/app/log-in/log-in-http.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewService } from './review.service';
import { review } from 'src/app/classes/review';



@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  revieww:review[];
  userr:review[];
  book:review[];
  id: number = +this.route.snapshot.paramMap.get('userId');
  
  bookid: number = +this.route.snapshot.paramMap.get('bookId');
 
     you:boolean ;
  constructor(private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private httpser:ReviewService) { }

 
  ngOnInit() {
   
    this.httpser.getReview(this.id,this.bookid).subscribe(
      data =>{
        this.revieww=data.pages ;
        this.userr =data.user;
        this.book=data.book_title;
        this.revieww[0].user_id=this.id;
       this.book[0].book_id=this.bookid;

      //  console.log(this.revieww.user_id);
       
      console.log(data);
     })
  }
 
          
   

}
