import { Component, OnInit } from '@angular/core';
import { HttpFollowingService } from './httpfollower.service';
import { profile } from '../classes/profile';
import {followerComponent} from '../classes/followerComponent';
import  {HttpService} from '../http.service';
import { ActivatedRoute } from '@angular/router';
/**
 * Show the followers list and Search for the followers of the main user, You can Follow or unfollow somwone .
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
 * GetUserprofile get the data of the profile of main user i used it to get the name of the main  user.
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

     /** receives id from url and send it to the get request */
    const id: number = +this.route.snapshot.paramMap.get('id');

    /**
    * subscribe to the data received from json file which contain the profile of the authenticated user info information
    *
    * and if any error occurs it prints it to the log
*/  if (id > 0 ){

   this.myfirstservice.getUserprofile(id).subscribe(
       (data: profile) => this.selectedProfile = data,
              )
              this.myfirstservice.getnotauthfollowing(id).subscribe((following:any)=>{
                this.following =following.following ;
                });

   }
   else
   {
   this.myfirstservice.getAuthUserprofile().subscribe(
   (data: profile) => this.selectedProfile = data,
   (err: any) => console.log(err)
    );

    this.myfirstservice.getfollowing().subscribe((following:any)=>{
      this.following =following.following ;
      });
   }
  }

  
  /**
 * addFollowing () is a post request responsible for follow button it takes the id of the user to add it in following list.
 */
 
  add(nb) {

    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id>0)
    {
      this.myfirstservice.addFollowing(nb).subscribe(
        data  => {
          this.myfirstservice.getnotauthfollowing(id).subscribe((following:any)=>{
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
        
        );
    }
    else{
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
        
        );
    }
  
  }


/**
 * noFollowers () is function to show message to the user if he has no one follow him .
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
*Remove the follow button if the person is already in following list and make it  unfollow .
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
/**
 * delFollowing () function contains a post request resonsible for unfollow button it removes the data of certain user of this id from the followers of the main user the data is  ( name of user , image , id of user ).
 */
  delFollowing(id:number){
    const idd: number = +this.route.snapshot.paramMap.get('id');
    if (idd>0)
    {
      this.myfirstservice.unfollow(id).subscribe((data)=>{
        this.myfirstservice.getnotauthfollowing(idd).subscribe((following:any)=>{
          this.following =following.following ;
          });
  
        this.myfirstservice.getfollowers().subscribe((posts:any)=>{
          this.posts =posts.followers ;
          this.temp = posts;
          console.log(posts);
          })
          
          console.log("success");
  
      });

    }else{
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


  
  

}
