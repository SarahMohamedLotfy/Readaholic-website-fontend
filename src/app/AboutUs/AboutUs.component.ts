import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../classes/profile';
import { HttpService } from '../http.service';
import {aboutusService} from './httpAboutUs.service';
import {ProfileService} from '../profile/profile.service';

/**
 * About us page to tell the users who we are
 */
@Component(
   /**
 * Connect with the AboutUs.html and AboutUs.css .
 */{
  selector: 'app-aboutus',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.scss']
})
export class AboutusComponent implements OnInit {



 /**
*Constructer that take AboutUs service  .
 */

  constructor(private myfirstservice :aboutusService ) { }

/**
*Initialization function  .
 */

  ngOnInit() {
    

 
  }



}
