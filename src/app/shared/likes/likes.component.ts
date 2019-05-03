import { Component, OnInit, Input } from '@angular/core';
import { Likes } from 'src/app/classes/Likes';
import { LikesService } from './likes.service';
import { ListLikesService } from '../list-likes/list-likes.service';
import { listLikes } from 'src/app/classes/listLikes';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
/** flag to determine whter the like button is clicked or not */
likeFlag: boolean = false;
likesList: listLikes[];
/** input from parent component to get user id */
@Input () user: number;
/** input from parent component to get resource id */
@Input () resourse_id : number;

btnTextlike="like";
btnTextunlike="unlike"
/** initiate likeservice object in the constructor to use likeservice functions */
  constructor( private likeservice: LikesService, private listLike: ListLikesService ) { }

  ngOnInit() {
    this.listLike.getLikesList(this.resourse_id).subscribe(data => {
      this.likesList = data,
      console.log(data)
    },
       (err: any) => console.log(err)
    )
  }

/** like a review  */
likeOrUnlikereview(): void {
  this.likeFlag=!this.likeFlag;
    this.likeservice.likeObject(this.user, this.resourse_id);
}

}
