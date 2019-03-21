import { Component, OnInit } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FilterPipe} from './filter.pipe.following';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  posts:any=[];
  temp: any =[];filterfollowing:[];
  constructor(private service:HttpService) { }

  searchText: string = ''


  ngOnInit() {

   this.service.getfollowing().subscribe((posts:any)=>{
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
