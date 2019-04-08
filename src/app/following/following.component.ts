import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../classes/profile';
import { HttpService } from '../http.service';
import {HttpFollowinggService} from './httpfollowing.service';
import {ProfileService} from '../profile/profile.service';
/**
 * Show the following list with books they are currently reading and Search for people following you 
 */
@Component(
   /**
 * Connect with the following.html and following.css .
 */{
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {


/**
 * posts  is array of the data of people following  the main users ( id , name ,image,bookid,bookname,bookimage ) .

 */
  posts:any=[];
 /**
 * selectedProfile is the profile of the main user  who logged in . 
 */
  selectedProfile: profile ;
   /**
 * temp is array of people following the main users .
 */
  temp: any =[];
   /**
 * Search input text in search box .
 */
  searchText: string = ''
 /**
*Constructer that take service and routing .
 */
  constructor(private myfirstservice :HttpFollowinggService,private profileservice :ProfileService,private route: ActivatedRoute,private router:Router ) { }


/**
 * Contains Get requests to get following list and books they are currently reading   and to get the profile data to get the name of the main user .
 * Getfollowing () is a get request ti get the data of people following the main user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid, bookname,bookimage).
 * GetUserprofile get the data of the profile of main user i used it to get the name of the main  user
 */
  ngOnInit() {
    

 
   this.myfirstservice.getfollowing().subscribe((posts:any)=>{
      this.posts =posts ;
      this.temp = posts;});


      this.profileservice.getUserprofile(90).subscribe(
        data => {
          this.selectedProfile = data,
          (err: any) => console.log(err),
          console.log(this.selectedProfile)
                 }) ;
  
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
/**
*Filter for names of following people.
 */ 
  this.posts = this.temp.filter(it => 
    it["name"].toLocaleLowerCase().includes(this.searchText)
  );
}
//onclick(){
 // this.router.navigateByUrl('/bookinfo/https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following/id');
//}






}
