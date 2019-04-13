
import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { LogInHttpService } from './log-in/log-in-http.service';
import { HttpService } from './http.service';
import { user } from './classes/user';


/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * App component
 */
export class AppComponent {
  title = 'frontend';
  user:user ;
  constructor(private service:HttpService,private router:Router){
    
  }
 
 
  


    





  }



