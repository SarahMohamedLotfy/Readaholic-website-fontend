import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { profile } from '../classes/profile';
import {followingComponent} from '../classes/followingComponent';

/**
 * Show the followers list and Search for the followers of the main user .
 */
@Component(
   /**
 * Connect with the follower.html and follower.css .
 */{
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
/**
 * posts is array of the follwers of the main users it contains ( name , id , image) .
 */
  posts:any=[];
  /**
 * temp is array of the follwers of the main users it contains ( name , id , image) .
 */
  temp: any =[];
  /**
 * selectedProfile is the profile of the main user  who logged in . 
 */
  selectedProfile: profile ;
 searchText: string = '';
 empty:boolean;
 /**
*Constructer that take service and routing .
 */
  constructor(private myfirstservice :HttpService ) { }
  
  /**
 * Contains Get requests to get followers list and to get the profile data to get the name of the main user .
 * Getfollowing () is a get request to get the data of the followers of the main user .
 * The data i get is ( name of user , image of user , id of user ).
 * GetUserprofile get the data of the profile of main user i used it to get the name of the main  user
 */


  ngOnInit() {

    this.myfirstservice.getfollowers().subscribe((posts:any)=>{
       this.posts =posts ;
       this.temp = posts;
       })


       this.myfirstservice.getUserprofile(1).subscribe(
        data => {
          this.selectedProfile = data,
          (err: any) => console.log(err),
          console.log(this.selectedProfile)
                 }) ;

                 
                 if (this.posts===null )
                 {
                   this.empty=true;
              
                 }
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
