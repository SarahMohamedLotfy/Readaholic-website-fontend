import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FilterPipe} from './filter.pipe.follower';
import { profile } from '../classes/profile';
import {followingComponent} from '../classes/followingComponent';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  posts:any=[];
  temp: any =[];
  filterfollowing:[];
  selectedProfile: profile ;
  searchText: string = ''

  constructor(private myfirstservice :HttpService ) { }
  
  
  ngOnInit() {

    this.myfirstservice.getfollowers().subscribe((posts:any)=>{
       this.posts =posts ;
       this.temp = posts;
       this.filterfollowing=posts ;})


       this.myfirstservice.getUserprofile(1).subscribe(
        data => {
          this.selectedProfile = data,
          (err: any) => console.log(err),
          console.log(this.selectedProfile)
                 }) ;
   
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
