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

  constructor(private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private httpser:ReviewService) { }
 reviews:review[] ;
 id: number = +this.route.snapshot.paramMap.get('userId');
 
 bookid: number = +this.route.snapshot.paramMap.get('bookId');
 
  ngOnInit() {
   
    this.httpser.getReview(this.id,this.bookid).subscribe(
      data =>{
        this.reviews=data.pages ;
        /*
        this.reviews.user_id=this.id;
        console.log(this.review.user_id);*/
       
        console.log(data);
     })
  }
 
          
   

}
