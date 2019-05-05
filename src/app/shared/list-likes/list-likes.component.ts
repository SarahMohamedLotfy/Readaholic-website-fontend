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

 @Input () resourse_id : number;

  likesList : listLikes[];
  temp: any =[];
  posts:any=[];
  constructor(private ser: ListLikesService) { }

 ngOnInit() {
  this.ser.getLikesList(this.resourse_id).subscribe((posts:any)=>{
    this.posts =posts.likes ;
    this.temp = posts;
    console.log(posts);
    }
    ,
       (err: any) => console.log(err)
    );

  }

  reload(){
    this.ser.getLikesList(this.resourse_id).subscribe((posts:any)=>{
      this.posts =posts.likes ;
      this.temp = posts;
      console.log(posts);
      }
      ,
         (err: any) => console.log(err)
      );
  }


}
