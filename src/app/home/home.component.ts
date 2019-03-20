import { book } from './../classes/book';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { update } from '../classes/update';
import { actor } from '../classes/actor';
import { action } from '../classes/action';
import { ActionSequence } from 'protractor';
import { profile } from '../classes/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 updates:update[] ;
 actors:actor[];
 actions:action[];
 books:book[];
  error: any;
 profile:profile ;
  constructor(private httpser:HttpService) { }

  ngOnInit() {
    this.httpser.getUpdates().subscribe(
        data =>{
          this.updates=data ;
          this.actors=data; 
         this.actions=data;
          this.books=data;
          }, error => this.error = error);
    this.httpser.getUserInfo().subscribe(
      data=>{
        this.profile=data;
      }
    )
    
    }

}
