import { Component, OnInit } from '@angular/core';
import { following } from '../classes/following';
import { HttpService } from '../http.service';
import { profile } from '../classes/profile';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   selectedProfile: profile ;
   allFollowings: any;

   toRead: number ;
   currentlyReading: number;

  constructor(private httpService: HttpService ,
              private route: ActivatedRoute , private router: Router ) { }

  ngOnInit() {

    this.httpService.getUserfollowings().subscribe(
          data => {
            this.allFollowings = data,
            (err: any) => console.log(err),
            console.log(this.allFollowings)
          });

    this.httpService.getUserprofile(1).subscribe(
      data => {
        this.selectedProfile = data,
        (err: any) => console.log(err),
        console.log(this.selectedProfile)
               }) ;

   // this.httpService.getUserprofile( id ).subscribe(
   //   (data: profile) => this.selectedProfile = data,
   //   (err: any) => console.log(err),
   //   () => console.log(' Profile is displayed ')
   // );
  }

}
