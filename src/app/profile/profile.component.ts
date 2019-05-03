import { Component, OnInit } from '@angular/core';
import { followingComponent } from '../classes/followingComponent';
import { profile } from '../classes/profile';
import { ActivatedRoute , Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { HttpFollowinggService } from '../following/httpfollowing.service';
import { updates } from '../classes/updates';
import { userShelves } from '../classes/userShelves';

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
   allFollowings: any[];
   posts: any[];
   temp: any = [];

   allUpdates: updates[];
   allShelves: userShelves[];

/**
 * the constructor creates instances of http service
 *
 *  and the routing to make the profile able to navigate between pages
*/
  constructor(private httpService: ProfileService ,
              private route: ActivatedRoute , private router: Router , private pro: HttpFollowinggService ) { }
/** get the auth user data and his following */
  ngOnInit() {
    /** receives id from url and send it to the get request */
    const id: number = +this.route.snapshot.paramMap.get('id');
/** to choose auth or another profile */
    if (id > 0 ) {
/** get user profile by id */
   this.httpService.getUserprofile(id).subscribe(
        (data: profile) => this.selectedProfile = data,
               );
   this.httpService.getUpdatesForuser(id).subscribe(data => {
    this.allUpdates = data ;
    console.log(data);
    this.loadData(); } ,
    (err: any) => console.log(err)
     );
   this.httpService.getUpdatesForuser(id).subscribe(data => {
        this.allUpdates = data ;
        console.log(data);
        this.loadData(); } ,
        (err: any) => console.log(err)
         );
    } else {
      /** get authenticated user profile */
    this.httpService.getAuthUserprofile().subscribe(
    (data: profile) => this.selectedProfile = data,
    (err: any) => console.log(err)
     );
    this.httpService.getUpdatesForuser(0).subscribe(data => {
      this.allUpdates = data ;
      console.log(data);
      this.loadData(); } ,
      (err: any) => console.log(err)
       );
    this.pro.getfollowing().subscribe((posts: any) => {
      this.posts = posts.following ;
      this.temp = posts.following;
      console.log(posts);});
    }
    /**
     * subscribe to the data received from json file which contain the following users information and if any error occurs it prints it to the log
     */
    /** get folowing of the user */
  }

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
