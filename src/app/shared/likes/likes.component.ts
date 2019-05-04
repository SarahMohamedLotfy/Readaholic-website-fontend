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
likeFlag = false;
//likesList: listLikes[];
/** input from parent component to get user id */
@Input () user: number;
/** input from parent component to get resource id */
@Input () resourse_id: number;

btnTextlike = "like";
btnTextunlike ='unlike';
likesList: listLikes[];
flag : boolean ;
count : number;
var0=0;
var00=0;
var1=1;


/** initiate likeservice object in the constructor to use likeservice functions */
  constructor( private likeservice: LikesService, private listLike: ListLikesService ) { }

  ngOnInit() {
   this.listLike.getLikesList(this.resourse_id).subscribe(data => {
     this.likesList = data,
     this.flag=this.likesList.hasOwnProperty('Message');
     console.log(this.flag),
      console.log(data);
    },
       (err: any) => console.log(err)
    );
    console.log(JSON.stringify(this.likesList));

  }

  hereOrnot(){
    this.flag= this.likesList.hasOwnProperty('Message');
  }

/** like a review  */
likeOrUnlikereview(): void {
  this.likeFlag = !this.likeFlag;
  this.likeservice.likeObject(this.user, this.resourse_id);
}
likeOrUnlikereviewstate(): void {
  this.likeservice.likeObject(this.user, this.resourse_id);
}
counter0(){
  this.var0=1
}
counter00(){
  this.var00=1;
}
checkCount(): boolean {
if(this.var0==0 && this.var00==0)
return false;
if(this.var0==1 && this.var00 == 0)
return true;
if(this.var0==1 && this.var00 ==1)
return false;
}

}
