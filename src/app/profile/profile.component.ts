import { Component, OnInit } from '@angular/core';
import { followingComponent } from '../classes/followingComponent';
import { HttpService } from '../http.service';
import { profile } from '../classes/profile';
import { ActivatedRoute , Router } from '@angular/router';



/**The component that sets the profile page html and scss  */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   /**stores the profile information */
   selectedProfile: profile ;
  /**stores the following of user */
   allFollowings: any;

/**
 * the constructor creates instances of http service and the routing to make the profile able to navigate between pages
*/
  constructor(private httpService: HttpService ,
              private route: ActivatedRoute , private router: Router ) { }
/** get the auth user data and his following */
  ngOnInit() {

    /**
     * subscribe to the data received from json file which contain the following users information and if any error occurs it prints it to the log
     */
    this.httpService.getfollowing().subscribe(
          data => {
            this.allFollowings = data,
            (err: any) => console.log(err),
            console.log(this.allFollowings)
          });
     /**
     * subscribe to the data received from json file which contain the profile of the authenticated user info information and if any error occurs it prints it to the log
     */
    this.httpService.getUserprofile(1).subscribe(
      data => {
        this.selectedProfile = data,
        (err: any) => console.log(err),
        console.log(this.selectedProfile)
               }) ;

  }


}
