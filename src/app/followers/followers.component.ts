import { Component, OnInit } from '@angular/core';

import { FilterPipe} from './filter.pipe.follower';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  posts:any=[];
  temp: any =[];
  filterfollowing:[];
  constructor(private service:HttpService ) { }
  
  searchText: string = ''
  
  ngOnInit() {

    this.service.getfollowers().subscribe((posts:any)=>{
       this.posts =posts ;
       this.temp = posts;
       this.filterfollowing=posts ;})
   
  }
  search(){

      if (!this.posts) {
        return [];
      }
      if (this.searchText=='') {
        this.posts = this.temp;
      }
      this.searchText = this.searchText.toLocaleLowerCase();
  
      this.posts = this.temp.filter(it => 
        it["name"].toLocaleLowerCase().includes(this.searchText)
      );
  }

}
