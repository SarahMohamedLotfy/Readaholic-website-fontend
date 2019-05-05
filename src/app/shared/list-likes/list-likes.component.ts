import { Component, OnInit, Input } from '@angular/core';
import { ListLikesService } from './list-likes.service';
import { listLikes } from 'src/app/classes/listLikes';
import { LikesService } from '../likes/likes.service';

@Component({
  selector: 'app-list-likes',
  templateUrl: './list-likes.component.html',
  styleUrls: ['./list-likes.component.css']
})
export class ListLikesComponent implements OnInit {
/** id of reviewed post */
 @Input () resourse_id : number;

  /** array of likes list */
  temp: any =[];
  /** stores likes list of the review */
  posts:any=[];
  constructor(private ser: ListLikesService) { }

 ngOnInit() {
  this.ser.getLikesList(this.resourse_id).subscribe((posts:any)=>{
    this.posts =posts.likes ;
    this.temp = posts;
    console.log(posts.likes);
    console.log(this.posts[0].username);
    }
    ,
       (err: any) => console.log(err)
    );

  }
/** reload list of likes to get any updates synchrounsely */
  reload(){
    this.ser.getLikesList(this.resourse_id).subscribe((posts:any)=>{
      this.posts =posts.likes ;
      this.temp = posts;
      console.log(posts);
      console.log(this.posts[0].username);
      }
      ,
         (err: any) => console.log(err)
      );
  }


}
