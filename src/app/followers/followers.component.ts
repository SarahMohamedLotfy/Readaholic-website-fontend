import { Component, OnInit } from '@angular/core';
import { HttpFollowingService } from './httpfollower.service';
import { profile } from '../classes/profile';
import {followerComponent} from '../classes/followerComponent';
import  {HttpService} from '../http.service';
import { ActivatedRoute } from '@angular/router';
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
   /**
 * Search input text in search box .
 */
 searchText: string = '';
 /**
* To Check if the json file is empty or not  */ 
 empty:boolean;
 /**
*Constructer that take service and routing .
 */
  constructor(private myfirstservice :HttpFollowingService ,private profilesevice:HttpService, private route:ActivatedRoute ) { }
  
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


       this.profilesevice.getUserprofile(90).subscribe(
        data => {
          this.selectedProfile = data,
          (err: any) => console.log(err),
          console.log(this.selectedProfile)
                 }) ;

                 
                 if (this.posts==[] )
                 {
                   this.empty=true;
                 }
  }
  add(id: number,name: string,image_url: string,bookid:number,bookname:string,  bookimage:string, country :string
    ): void {
    //name = name.trim();
    //if (!name) { return; }

    // The server will generate the id for this new hero
    const newFollowing: followerComponent = { id,name ,image_url,bookid,bookname,  bookimage,country } as followerComponent;
    this.myfirstservice.addFollowing(newFollowing)
      .subscribe(hero => this.posts.push(hero));
  }


  
  
  /**
*Search for the name of following person when click on search button  .
 */ 
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
