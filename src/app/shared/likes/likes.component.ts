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

/** input from parent component to get user id */
@Input () user: number;
/** input from parent component to get resource id */
@Input () resourse_id: number;

temp: any =[];
posts:any=[];

/** initiate likeservice object in the constructor to use likeservice functions */
  constructor( private likeservice: LikesService, private listLike: ListLikesService ) { }

  ngOnInit() {
   this.listLike.getLikesList(this.resourse_id).subscribe((posts:any)=>{
    this.posts =posts.likes ;
    this.temp = posts;
    this.exists();
    console.log(posts);
    }
    ,
       (err: any) => console.log(err)
    );


  }
/** function used to loop over list of likes array to get if the auth has liked the review or not to determine its state */
   exists() {
     if(this.posts!=null){

    const found = this.posts.some(el => el.have_the_like == 'Yes');
    return found;}
  }

/** like or unlike a review  */
likeOrUnlikereview(): void {
  this.likeservice.likeObject(this.user, this.resourse_id);

  this.listLike.getLikesList(this.resourse_id).subscribe((posts:any)=>{
    this.posts =posts.likes ;
    this.temp = posts;
    this.exists();
    console.log(posts);
    }
    ,
       (err: any) => console.log(err)
    );


}



}
