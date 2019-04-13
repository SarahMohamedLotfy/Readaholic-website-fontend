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
   allFollowings: followingComponent[];

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

     /**
     * subscribe to the data received from json file which contain the profile of the authenticated user info information
     *
     * and if any error occurs it prints it to the log
*/  
console.log(id);
if (id > 0 ){

    this.httpService.getUserprofile(id).subscribe(
        (data: profile) => this.selectedProfile = data,
               )
    }
    else
    {
    this.httpService.getAuthUserprofile().subscribe(
    (data: profile) => this.selectedProfile = data,
    (err: any) => console.log(err)
     );
    }
    /**
     * subscribe to the data received from json file which contain the following users information and if any error occurs it prints it to the log
     */
    this.pro.getfollowing().subscribe(
            (data: followingComponent[]) => this.allFollowings = data,
           // (err: any) => console.log(err),
          );


  }


}
