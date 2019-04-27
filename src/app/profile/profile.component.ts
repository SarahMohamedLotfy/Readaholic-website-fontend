import { Component, OnInit } from '@angular/core';
import { followingComponent } from '../classes/followingComponent';
import { profile } from '../classes/profile';
import { ActivatedRoute , Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { HttpFollowinggService } from '../following/httpfollowing.service';


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
               )
    }
    else
    {
      /** get authenticated user profile */
    this.httpService.getAuthUserprofile().subscribe(
    (data: profile) => this.selectedProfile = data,
    (err: any) => console.log(err)
     );
    }
    /**
     * subscribe to the data received from json file which contain the following users information and if any error occurs it prints it to the log
     */
    /** get folowing of the user */
    this.pro.getfollowing().subscribe(
            (data: followingComponent[]) => this.allFollowings = data,
           // (err: any) => console.log(err),
          );


  }
  


}
