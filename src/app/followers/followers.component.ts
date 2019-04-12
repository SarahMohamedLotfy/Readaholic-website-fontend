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
 * posts is array of the followers of the main users it contains ( name , id , image) .
 */
  posts:any=[];
  /**
 * Following is array of the following of the main users it contains ( name , id , image) .
 */
  following:any=[];
  /**
 * Count is the length of json file array

 */
  count:number;
  /**
 * Id of the follower . 
 */
personId:number;
  /**
 * used to loop over the following list . 
 */
  //i:number;
  /**
 * result of for loop over the following list.
 */
result:number;
  /**
 * temp is array of the follwers of the main users it contains ( name , id , image) .
 */
  temp: any =[];
  /**
 * selectedProfile is the profile of the main user  who logged in . 
 */
  selectedProfile: profile ;
  /**
 * Name of th following person .  
 */
  nameFollowing:string;
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
       this.posts =posts.followers ;
       this.temp = posts;
       console.log(posts);
       })

       
       this.myfirstservice.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

       this.profilesevice.getUserprofile(90).subscribe(
        data => {
          this.selectedProfile = data
          
                 }) ;

                 
                 if (this.posts==[] )
                 {
                   this.empty=true;
                 }
  }

  
  /**
 * addFollowing () is a post request to add the data of certain user to the followers of the main user the data is  ( name of user , image , id of user ).
 */
 /* add(id: number): void {
    //name = name.trim();
    //if (!name) { return; }

    // The server will generate the id for this new hero
    const newFollowing: followerComponent = { id } as followerComponent;
    this.myfirstservice.addFollowing(newFollowing)
      .subscribe(hero => this.posts.push(hero));
  }*/
  add(nb) {
  this.myfirstservice.addFollowing(nb).subscribe(
    data  => {
      this.myfirstservice.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

      this.myfirstservice.getfollowers().subscribe((posts:any)=>{
        this.posts =posts.followers ;
        this.temp = posts;
        console.log(posts);
        })
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    );}


/**
 * noFollowers () is function to show message to the user if he has no one folow him .
 */
  noFollowers ():number
{
   this.count = Object.keys(this.posts).length;
  return this.count;
}
  
  /**
*Search for the name of follower person when click on search button  .
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

  /**
*Remove the follow button if the person is already in following list .
 */ 
noFollowbutton(personId):boolean
{

  for ( let i of this.following)
  {
   
  if (personId==i.id)
  {
    return false;
  }

}
return true;
}

  delFollowing(id:number){


    this.myfirstservice.unfollow(id).subscribe((data)=>{
      this.myfirstservice.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

      this.myfirstservice.getfollowers().subscribe((posts:any)=>{
        this.posts =posts.followers ;
        this.temp = posts;
        console.log(posts);
        })
 
        
        
        console.log("success");
  
        

    });
  }


  
  

}
