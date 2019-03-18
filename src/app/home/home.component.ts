import { book } from './../classes/book';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { update } from '../classes/update';
import { actor } from '../classes/actor';
import { action } from '../classes/action';
import { ActionSequence } from 'protractor';
import { Router } from '@angular/router';

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
 
  constructor(private httpser:HttpService,private router:Router) { }

  ngOnInit() {
    this.httpser.getUpdates().subscribe(
        data =>{
          this.updates=data ;
          this.actors=data; 
         this.actions=data;
          this.books=data;
        }, error => this.error = error)
        /*
        var i;
        for(i=1;i<2 ;i++){
        if (this.updates[i].action.typee ==="rating")
        { console.log("anything");
            this.updates[i].action.typee = "rated a book"  ;
          } 
      }*/
    }

    onLogout()
    {
      console.log('hi');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
}
