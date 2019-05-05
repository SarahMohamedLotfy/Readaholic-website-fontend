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

 /**@ignore */
 reviewShelf = 0;
 
 /**@ignore */
reviewRating = 0;
/**@ignore */
shelfName: string = "";
/**
 * Count of books in the array
 */
countt:number;
/**
 * Check if the userid is id of auth or  non auth user.
 */
useridd:boolean;
 /**
 * posts  is array of the books the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ) .

 */
posts:any=[];

/**
 * Count is the length of  array of books in read shelf.
 */
count0:number;
/**
 * Count is the length of  array of books in currently reading shelf.
 */
count1:number;
/**
 * Count is the length of  array of books in to-read  shelf.
 */
count2:number;
/**
 *The profile of the user.
 */
selectedProfile:profile;
/**
 *The id  of the user.
 */
userid:number;
/**
 *The shelf number of the books.
 */
shelfname:number;
/**
 *The shelf number of the books.
 */
shelfNumber:number;
/**
 *Boolean to check if there is no books at whole.
 */
nobooks:boolean;
/**
 *Boolean to check if there is no books at read shelf.
 */
nobooks0:boolean ;
/**
 *Boolean to check if there is no books at to read shelf.
 */
nobooks1:boolean;
/**
 *Boolean to check if there is no books at currently reading shelf.
 */
nobooks2:boolean;

/**
 * Shelves is the status of the book and the number of currently reading , to read , read .

 */
shelves:any=[];
/**
 * Id of the user.

 */
idUser:number;
  /**
* temp is is array of the books the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ) .
used it in search function.
*/
 temp: any =[];
  /**
* books is is array of the books the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ).
*/
 books:any=[];
  /**
* books is is array of the books in shelf read the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ).
*/
 books0:any=[];
  /**
* books is is array of the books in shelf to readthe user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ).
*/
 books1:any=[];
  /**
* books2 is is array of the books in shelf currently reading the user have ( bookid ,bookname,bookimage,rating ,avgrating ,dateread.data of publication ).
*/
 books2:any=[];
 /**
* Boolean to check if there is no books in the shelves.
*/
 nobookss:number;
 /**
* Boolean to put the arrow of the to-read in the initialization of the page.
*/
 initializedarrow:boolean = true;
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
  const id: number =+ this.route.snapshot.paramMap.get('id');
this.idUser=id;
  /**
  * subscribe to the data received from json file which contain the profile of the authenticated user info information
  *
  * and if any error occurs it prints it to the log
*/  if (id > 0 ){

 this.myfirstservice.getUserprofile(id).subscribe(
     (data: profile) => this.selectedProfile = data,
            )
         this.useridd= true;
        
 }
 else
 {
 this.myfirstservice.getAuthUserprofile().subscribe(
 (data: profile) => this.selectedProfile = data,
 (err: any) => console.log('ehuuhfuihdiuhfrr')
  );
  this.useridd= false;

 }

    
/**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
  if (id > 0 ){
  this.myfirstservice.gethisshelfbooks(0,id).subscribe((posts:any)=>{
  this.books0 =posts.pages ;
  this.count0 = this.books0.length;
 },
 (ERROR:any)   => {
  if(ERROR .status ==400)
  {
  this.nobooks0=true;
  this.books0=[];
  console.log('hghghghghg');

  }});
 this.myfirstservice.gethisshelfbooks(1,id).subscribe((posts:any)=>{
  this.books1 =posts.pages ;
  this.count1 = this.books1.length;
 },(ERROR:any)   => {
  if(ERROR .status ==400)
  {
  this.nobooks1=true;
  this.books1=[];
  console.log('hghghghghg');

  }});
 this.myfirstservice.gethisshelfbooks(2,id).subscribe((posts:any)=>{
  this.books2 =posts.pages ;
  this.count2 = this.books2.length;
 },(ERROR:any)   => {
  if(ERROR .status ==400)
  {
  this.nobooks2=true;
  this.books2=[];

  console.log('hghghghghg');

  }});
this.myfirstservice.gethisshelfbooks(1,id).subscribe((posts:any)=>{
  this.books =posts.pages ;
  this.temp =  this.books;
  console.log(this.books);
  this.initializedarrow=true;
},

(ERROR:any)  => {
  if(ERROR .status ==400)
  {
    this.books1=[];

  this.nobooks1=true;
  console.log('hbjhbhvhv');
  }
  
}
  );

  
}
  else 
  {
    this.myfirstservice.getMyshelfbooks(0).subscribe((posts:any)=>{
      this.books0 =posts.pages ;
      this.count0 = this.books0.length;
     },(ERROR:any)   => {
      if(ERROR .status ==400)
      {
      this.nobooks0=true;
      this.books0=[];

      console.log('hghghghghg');

      }});
     this.myfirstservice.getMyshelfbooks(1).subscribe((posts:any)=>{
      this.books1 =posts.pages ;
      this.count1 = this.books1.length;
     },(ERROR:any)   => {
      if(ERROR .status ==400)
      {
      this.nobooks1=true;
      this.books1=[];

      console.log('hghghghghg');

      }
    });
     this.myfirstservice.getMyshelfbooks(2).subscribe((posts:any)=>{
      this.books2 =posts.pages ;
      this.count2 = this.books2.length;
     },
     (ERROR:any)   => {
      if(ERROR .status ==400)
      {
      this.nobooks2=true;
      this.books2=[];

      console.log('hghghghghg');

      }
    });
    this.myfirstservice.getMyshelfbooks(1).subscribe((posts:any)=>{
      this.books =posts.pages ;
      this.temp =  this.books;
      console.log(this.books);
      this.initializedarrow=true;
    },
    (ERROR:any)   => {
      if(ERROR .status ==400)
      {
      this.nobooks1=true;
      this.books1=[];

      console.log('hghghghghg');

      }
    });
  }           
 }
 /**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
getmybooks(clicked:boolean,shelfnumber)
{
 
  
  const id: number = +this.route.snapshot.paramMap.get('id');
  if (id > 0 ){
  
  if (clicked == true)
  {
    this.myfirstservice.gethisshelfbooks(shelfnumber,id).subscribe((books:any)=>{
      this.books =books.pages ;
      this.books = books.pages;
      this.temp = books.pages;
      console.log(this.books);
    },(ERROR:any)   => {
      if(ERROR.status ==400)
      {
        if (shelfnumber==0)
        {
          this.books=[];

          this.nobooks=true;
          console.log('hghghghghg');
        }
     else if (shelfnumber==1)
     {
       this.nobooks1=true;
       this.books=[];

       console.log('hghghghghg');
     }
     if (shelfnumber==2)
        {
          this.books=[];

          this.nobooks2=true;
          console.log('hghghghghg');
        } 

      }});
  }
}
  else{
    if (clicked == true)
  {
    this.myfirstservice.getMyshelfbooks(shelfnumber).subscribe((books:any)=>{
      this.books =books.pages ;
      this.books = books.pages;
      this.temp = books.pages;
      console.log(this.books);
    },
    (ERROR:any)   => {
      if(ERROR .status ==400)
      {
        if (shelfnumber==0)
        {
          this.books=[];

          this.nobooks=true;
          console.log(this.nobooks2);
        }
     else if (shelfnumber==1)
     {
      this.books=[];

       this.nobooks1=true;
       console.log(this.nobooks2);
     }
     if (shelfnumber==2)
        {
          this.books=[];

          this.nobooks2=true;
          console.log(this.nobooks2);
        } 

      }
    });
  }
  
  }
}

/**
 *Getshelfbooks() is a function contains get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
Getshelfbooks(shelfnumber)
{
  this.myfirstservice.getMyshelfbooks(shelfnumber).subscribe((posts:any)=>{
    this.books =posts.pages ;
    this.temp = posts.pages;
    console.log(this.books);
  });
 
}
/**
  
 * Used to put arrows on shelves when the user click on the shelf.
 */
heighlight(shelfnumberr:number)
{
  this.shelfNumber=shelfnumberr;
}
/**
  
 * Used to put msg no books when there is no books in certain shelf.
 */
showNoboksmsg(shelfnum:number)
{
  if (shelfnum==0)
  {
  if ( this.nobooks0 ==true)
  {
  this.nobookss= 0;
  }
}
else if (shelfnum==0)
{
 if (this.nobooks1 ==true)
{
  this.nobookss= 1;

}}
else if (shelfnum==0)
{
 if (this.nobooks2 ==true)
{
  this.nobookss= 2;

}}
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
*noBooks() is a function that show mmessage that there is no books to the user if there are no books he have .
*/
noBooks ():number
{
   this.countt = Object.keys(this.books).length;
  console.log('countt');
  return this.countt;
}
/**
*noBooks() is a function that show mmessage that there is no books to the user on shelf read.
*/
noBooksOnshelf0()
{
  return this.nobooks0;
}
/**
*noBooks() is a function that show mmessage that there is no books to the user on shelf to read.
*/
noBooksOnshelf1()
{
  return this.nobooks1;
}
/**
*noBooks() is a function that show mmessage that there is no books to the user on shelf currently reading.
*/
noBooksOnshelf2()
{
  return this.nobooks2;
}

 

}





