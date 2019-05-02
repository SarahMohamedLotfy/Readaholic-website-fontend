import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../classes/profile';
import { HttpService } from '../http.service';
import {HttpsearchpeopleService} from './httpsearchPeople.service';
import {ProfileService} from '../profile/profile.service';
import {myBooks}  from '../classes/myBooks'
import {followingComponent}  from '../classes/followingComponent'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 /**
 * Connect with the fmy-books.html and my-books.css .
 */
@Component({
  selector: 'app-searchpeople',
  templateUrl: './searchpeople.component.html',
  styleUrls: ['./searchpeople.component.scss']
})
/**
 * Show the  list of books that the user have and Search for books .
 */
export class SearchPeopleComponent implements OnInit {

 
username:string;
  /**
* Search input text in search box .
*/
 searchText: string = ''
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
* To Check if the json file is empty or not  */ 
empty:boolean;

/**
*Constructer that take service and routing .
*/
constructor(private activatedRoute: ActivatedRoute, private service:HttpsearchpeopleService,private fb:FormBuilder,private router:Router) {
  this.form=this.fb.group({
    searchBox: ['',[Validators.required]],
    searchType: ['',[Validators.required]]
    });



 }
searchTerm:any;

people:any=[];
form: FormGroup;
isUser:boolean;
ngOnInit() {
  this.activatedRoute.queryParams .subscribe(params => {
   
    this.searchTerm = params['search'];});

    if(localStorage.getItem('token') == null){
      this.isUser = false;}
    
    else{
      this.isUser = true;
    }
  
  

   this.searchForBook();

    this.service.getfollowers().subscribe((posts:any)=>{
       this.posts =posts.followers ;
       this.temp = posts;
       console.log(posts);
       })

       
       this.service.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

     /** receives id from url and send it to the get request */
    //const id: number = +this.route.snapshot.paramMap.get('id');

    /**
    * subscribe to the data received from json file which contain the profile of the authenticated user info information
    *
    * and if any error occurs it prints it to the log
*/  

   
   

}


search(){
const val = this.form.value;
  this.router.navigate(['/searchpeople'],{queryParams:{'search':val.searchBox}});
  this.searchTerm=val.searchBox;
    console.log(this.searchTerm);
this.searchForBook();

}

searchForBook()
{
  const val = this.form.value;
    console.log(this.searchTerm);

  if(val.searchType=="Username" )
  this.service.getuserbyUsername(this.searchTerm).subscribe((people:any)=>{
    this.people =people.users ;
    
    console.log(this.people);
    console.log(people);
    },err=>console.log('nooo'))
    else if(val.searchType=="name" )
    {
      this.service.getuserbyName(this.searchTerm).subscribe((people:any)=>{
        this.people =people.users ;
        console.log(people);
        })
    }
    else if(val.searchType=="userORname" )
    {
      this.service.getuserbyNameorusername(this.searchTerm).subscribe((people:any)=>{
        this.people =people.users ;
        console.log(people);
        })
    }
   
}
/**
 * addFollowing () is a post request responsible for follow button it takes the id of the user to add it in following list.
 */
 
add(nb) {
  this.service.addFollowing(nb).subscribe(
    data  => {
      this.service.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

      this.service.getfollowers().subscribe((posts:any)=>{
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
 * noFollowers () is function to show message to the user if he has no one follow him .
 */
  noFollowers ():number
{
   this.count = Object.keys(this.posts).length;
  return this.count;
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
    this.service.unfollow(id).subscribe((data)=>{
      this.service.getfollowing().subscribe((following:any)=>{
        this.following =following.following ;
        });

      this.service.getfollowers().subscribe((posts:any)=>{
        this.posts =posts.followers ;
        this.temp = posts;
        console.log(posts);
        })
        
        console.log("success");

    });
  }


  
  

}





