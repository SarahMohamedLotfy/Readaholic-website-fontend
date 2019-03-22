import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FilterPipe} from './filter.pipe.following';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  posts:any=[];
  temp: any =[];filterfollowing:[];
  constructor(private myfirstservice :HttpService,private route: ActivatedRoute,private router:Router ) { }

  searchText: string = ''


  ngOnInit() {

   this.myfirstservice.getfollowing().subscribe((posts:any)=>{
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
//onclick(){
 // this.router.navigateByUrl('/bookinfo/https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following/id');
//}






}
