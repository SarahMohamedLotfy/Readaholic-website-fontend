import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../classes/profile';
import { HttpService } from '../http.service';
import {HttpmybooksService} from './httpmybooks.service';
import {ProfileService} from '../profile/profile.service';
import {myBooks}  from '../classes/myBooks'
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';
import { StarComponent } from '../shared/star/star.component';
 /**
 * Connect with the fmy-books.html and my-books.css .
 */
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
/**
 * Show the  list of books that the user have and Search for books .
 */
export class MyBooksComponent implements OnInit {
  userInfo: myBooks;
 /**@ignore */
 reviewShelf = 0;
 
 /**@ignore */
reviewRating = 0;
/**@ignore */
shelfName: string = "";
 /**
 * posts  is array of the books the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ) .

 */
posts:any=[];

/**
 * Count is the length of json file array

 */
count:number;
userid:number;
shelfname:number;
/**
 * Shelves is the status of the book and the number of currently reading , to read , read .

 */
shelves:any=[];


  /**
* temp is is array of the books the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ) .
used it in search function.
*/
 temp: any =[];
 books:any=[];
  /**
* Search input text in search box .
*/
 searchText: string = ''
/**
*Constructer that take service and routing .
*/
 constructor(private myfirstservice :HttpmybooksService,private profileservice :ProfileService,private route: ActivatedRoute,private router:Router ) { }


/**
* Contains getUsershelves() is a get request to number of books the user read and currently reading an to read.
* getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
 ngOnInit() {
   
/**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
this.myfirstservice.getMyshelfbooks(1).subscribe((posts:any)=>{
  this.books =posts.pages ;
  this.temp =  this.books;
  console.log(this.books);
});
  

     /**
 *getUsershelves() is a get request to number of books the user read and currently reading an to read */
     this.myfirstservice.getUsershelves().subscribe(
      data => {
        this.shelves = data,
        (err: any) => console.log(err),
        console.log(this.shelves)
               }) ;
              
 }
 review() {
 
  this.myfirstservice.createReview(this.posts.id, this.reviewShelf, this.reviewRating)
  .subscribe((data) => { 
    this.userInfo.id = data.Review_id;
    this.userInfo.rating = data.rate
    this.userInfo.shelf_name = 0;
 
  this.reviewShelf = this.userInfo.shelf_name;
  this.reviewRating = this.userInfo.rating;
   });
}
getmybooks(clicked:boolean,shelfnumber)
{
 
  
   
  
  if (clicked == true)
  {
    this.myfirstservice.getMyshelfbooks(shelfnumber).subscribe((books:any)=>{
      this.books =books.pages ;
      this.books = books.pages;
      this.temp = books.pages;
      console.log(this.posts);
    
    });
  }
}
Getshelfbooks(shelfnumber)
{
  this.myfirstservice.getMyshelfbooks(shelfnumber).subscribe((posts:any)=>{
    this.books =posts.pages ;
    this.temp = posts.pages;
    console.log(this.books);
  });
 
}


/**
*Search for the name of the book when click on search button  .
*/ 
search(){

 if (!this.books) {
   return [];
 }
 if (this.searchText=='') {
   this.books = this.temp;
 }
 this.searchText = this.searchText.toLocaleLowerCase();
/**
*Filter for names of books.
*/ 
 this.books = this.temp.filter(it => 
   it["title"].toLocaleLowerCase().includes(this.searchText)
 );
}

/**
*noBooks() is a function that show mmessage that thre is no books to the user if there are no books he have .
*/
noBooks ():number
{
   this.count = Object.keys(this.books).length;
  console.log('count');
  return this.count;
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





