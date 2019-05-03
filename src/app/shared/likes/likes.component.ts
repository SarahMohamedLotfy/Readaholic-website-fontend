import { Component, OnInit, Input } from '@angular/core';
import { Likes } from 'src/app/classes/Likes';
import { LikesService } from './likes.service';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
/** flag to determine whter the like button is clicked or not */
likeFlag: boolean = false;
/** input from parent component to get user id */
@Input () user: string;
/** input from parent component to get resource id */
@Input () resourse_id : number;
/** initiate likeservice object in the constructor to use likeservice functions */
  constructor( private likeservice: LikesService) { }

  ngOnInit() {
  }

/** like a review  */
likeOrUnlikereview(): void {
    this.likeFlag = !this.likeFlag;

    this.likeservice.likeObject(this.user, this.resourse_id);


}

}
