import { Component, OnInit } from '@angular/core';
import { followingComponent } from '../classes/followingComponent';
import { profile } from '../classes/profile';
import { ActivatedRoute , Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { HttpFollowinggService } from '../following/httpfollowing.service';
import { updates } from '../classes/updates';
import { myBooks } from '../classes/myBooks';
import { HttpmybooksService } from '../my-books/httpmybooks.service';

/** The component that sets the profile page html and scss  */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   /** stores the profile information */
   selectedProfile: profile ;
  /** stores the following of user */
   posts: any[];
   /** array of user following */
   temp: any = [];
/** array of updates of user only */
   allUpdates: updates[];
   /** array of currently reading books for user */
   currentlyReading: myBooks[];
   /** boolean to determine wether user can se button to route to account setting */
   showEditbtn = false;
   /** variable to determine whether its the auth user or else  */
   authid: number;
   /** array to get books of read */
   books0: any = [];
    /** array to get books of currently-reading */
   books2: any = [];
    /** array to get books of to-read */
   books1: any = [];
   /** number of books in read shelf  */
   count0: number;
   /** number of books into-read shelf  */
   count1: number;
   /** number of books in currently-reading shelf  */
   count2: number;
   /** determine guest mode or not */
   isUser:boolean;


/**
 * the constructor creates instances of http service
 *
 *  and the routing to make the profile able to navigate between pages
*/
  constructor(private httpService: ProfileService ,
              private route: ActivatedRoute , private router: Router , private pro: HttpFollowinggService , private bookService: HttpmybooksService) { }
/** get the auth user data and his following */
  ngOnInit() {
    /** receives id from url and send it to the get request */
    const id: number = +this.route.snapshot.paramMap.get('id');
    /** gets user id form url */
    this.authid=id;
/** determine guest mode or not */
    if(localStorage.getItem('token') == null){
      this.isUser = false;}

    else{
      this.isUser = true;
    }
/** to choose auth or another profile */
    if (id > 0 ) {
/** get user profile by id */
   this.httpService.getUserprofile(id).subscribe(
        (data: profile) => this.selectedProfile = data,
               );

         if(this.isUser)
         {
           /**get updates for non auth user  */
   this.httpService.getUpdatesForuser(id).subscribe(data => {
    this.allUpdates = data ;
    console.log(data);
    this.loadData(); } ,
    (err: any) => console.log(err)
     );

  /**get followers for non auth user  */
   this.httpService.getfollowersforusers(id).subscribe((posts: any) => {
          this.posts = posts.following ;
          this.temp = posts.following;
          console.log(posts); });
      /** get currently-reading shelves for not authenticated user  */
   this.bookService.gethisshelfbooks(2, id).subscribe((posts: any) => {
            this.books2 = posts.pages ;
            this.count2 = this.books2.length;

           });
           /** get to-read shelves for not authenticated user  */
           if(!this.count2){ this.count2=0; }
   this.bookService.gethisshelfbooks(1, id).subscribe((posts: any) => {
            this.books1 = posts.pages ;
            this.count1 = this.books1.length;

           });
            /** get read shelves for not authenticated user  */
            if(!this.count1){ this.count1=0; }

   this.bookService.gethisshelfbooks(0, id).subscribe((posts: any) => {
            this.books0 = posts.pages ;
            this.count0= this.books0.length;
            console.log(this.books0);
          });
         if(!this.count0){ this.count0=0; }}

    } else {
      /** get authenticated user profile */
      /** show edit btn to auth user */
    this.showEditbtn = true;
    /** get profile for auth user */
    this.httpService.getAuthUserprofile().subscribe(
    (data: profile) => this.selectedProfile = data,
    (err: any) => console.log(err)
     );
      /** get updates for auth user */
    this.httpService.getUpdatesForuser(0).subscribe(data => {
      this.allUpdates = data ;
      console.log(data);
      this.loadData(); } ,
      (err: any) => console.log(err)
       );
       /** get following for auth user */
    this.pro.getfollowing().subscribe((posts: any) => {
      this.posts = posts.following ;
      this.temp = posts.following;
      console.log(posts); });
      /** get currently-reading shelves for  authenticated user  */
    this.bookService.getMyshelfbooks(2).subscribe((posts: any) => {
        this.books2 = posts.pages ;
        this.count2 = this.books2.length;

       });
         if(!this.count2){ this.count2=0;}
/** get read shelves for  authenticated user  */
    this.bookService.getMyshelfbooks(0).subscribe((posts: any) => {
        this.books0 = posts.pages ;
        this.count0 = this.books0.length;
       });
       /** get to-read for not authenticated user  */
       if(!this.count0){ this.count0=0;}
    this.bookService.getMyshelfbooks(1).subscribe((posts: any) => {
        this.books1 = posts.pages ;
        this.count1 = this.books1.length;

       });
        if(!this.count1){ this.count1=0;}
    }

  }
/** determine action done in the comments */
      loadData() {
        let i;

        for (i = 0; i < this.allUpdates.length; i++) {
     if ( this.allUpdates[i].update_type === 0 && !(this.allUpdates[i].body)) {

     this.allUpdates[i].actionText = ' rated a book ' ;

     } else if ( this.allUpdates[i].update_type === 0 ) {
       this.allUpdates[i].actionText = ' reviewed a book ' ;

      } else if ( this.allUpdates[i].update_type === 1 && this.allUpdates[i].shelf_type === 0) {
     this.allUpdates[i].actionText = ' read a book ' ;

     } else if (  this.allUpdates[i].update_type === 1 && this.allUpdates[i].shelf_type === 1) {
         this.allUpdates[i].actionText = ' is currently reading a book ' ;

       } else if (  this.allUpdates[i].update_type === 1 && this.allUpdates[i].shelf_type === 2) {

           this.allUpdates[i].actionText = ' wants to read a book ' ;

         } else  if ( this.allUpdates[i].update_type === 2) {

         this.allUpdates[i].actionText = ' started following  : ' ;
       } else if (  this.allUpdates[i].update_type === 3) {

           this.allUpdates[i].actionText = ' liked a review  ' ;

         } else  if (  this.allUpdates[i].update_type === 4) {

             this.allUpdates[i].actionText = ' commented on a review ' ;

         } else {  this.allUpdates[i].actionText = ' ' ; }

        }
           }

}
