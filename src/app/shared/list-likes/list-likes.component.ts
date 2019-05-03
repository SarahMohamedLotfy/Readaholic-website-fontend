import { Component, OnInit, Input } from '@angular/core';
import { ListLikesService } from './list-likes.service';
import { listLikes } from 'src/app/classes/listLikes';

@Component({
  selector: 'app-list-likes',
  templateUrl: './list-likes.component.html',
  styleUrls: ['./list-likes.component.css']
})
export class ListLikesComponent implements OnInit {

 @Input () resourse_id : number;
likesList : listLikes[];
  constructor(private ser: ListLikesService) { }


  ngOnInit() {
    this.ser.getLikesList(this.resourse_id).subscribe(data => {
      this.likesList = data,
      console.log(data)
    },
       (err: any) => console.log(err)
     );

  }

}
