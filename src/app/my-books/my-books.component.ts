import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../classes/profile';
import { HttpService } from '../http.service';
import {HttpmybooksService} from './httpmybooks.service';
import {ProfileService} from '../profile/profile.service';
import {myBooks}  from '../classes/myBooks'
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

 /**
 * posts  is array of the data of people following  the main users ( id , name ,image,bookid,bookname,bookimage ) .

 */
posts:any=[];
count:number;
stars:number;
shelves:myBooks;

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
 name:string='read'
/**
*Constructer that take service and routing .
*/
 constructor(private myfirstservice :HttpmybooksService,private profileservice :ProfileService,private route: ActivatedRoute,private router:Router ) { }


/**
* Contains Get requests to get following list and books they are currently reading   and to get the profile data to get the name of the main user .
* Getfollowing () is a get request ti get the data of people following the main user 
* and the books they are currently reading . 
* The data i get is ( name of user , image of user  , id of user  , bookid, bookname,bookimage).
* GetUserprofile get the data of the profile of main user i used it to get the name of the main  user
*/
 ngOnInit() {
   


  this.myfirstservice.getMybooks().subscribe((posts:any)=>{
     this.posts =posts ;
     this.temp = posts;});

     /*this.myfirstservice.getUsershelves().subscribe((data:myBooks)=>{
      this.shelves =data ;
     });*/
     
     this.myfirstservice.getUsershelves().subscribe(
      data => {
        this.shelves = data,
        (err: any) => console.log(err),
        console.log(this.shelves)
               }) ;
     
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

noBooks ():number
{
   this.count = Object.keys(this.posts).length;
  console.log('count');
  return this.count;
}
rating ():number
{
  this.stars = this.posts.id;
  console.log('count');
  return this.stars;
}
 
//onclick(){
// this.router.navigateByUrl('/bookinfo/https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following/id');
//}

/*title = 'Star Rating';

  recordList:any[]=[  
    {'Id':1,'Framework':'Angular JS', 'myList':[true,true,true,true,true]},  
    {'Id':2,'Framework':'Angular 2', 'myList':[true,true,true,true,true]},  
    {'Id':3,'Framework':'Angular 4', 'myList':[true,true,true,true,true]},  
    {'Id':4,'Framework':'Angular 5', 'myList':[true,true,true,true,true]},  
    {'Id':5,'Framework':'Angular 6', 'myList':[true,true,true,true,true]},  
      
  ];  
    setStarTable(record:any,data:any){  
      this.rating=data+1;  
      var tableList = this.recordList.find(function (obj: any) { return obj.Id === record.Id });  
      for(var i=0;i<=4;i++){  
        if(i<=data){  
          tableList.myList[i]=false;  
        }  
        else{  
          tableList.myList[i]=true;  
        }  
      }  
    } */
}





