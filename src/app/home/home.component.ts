import { book } from './../classes/book';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { update } from '../classes/update';
import { actor } from '../classes/actor';
import { action } from '../classes/action';
import { ActionSequence } from 'protractor';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> e2df5e3bfb5e2b5d690712c55ec64a703cdefd56

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
 
<<<<<<< HEAD
  constructor(private httpser:HttpService,private router:Router) { }
=======
  constructor(private httpser:HttpService) { }
>>>>>>> e2df5e3bfb5e2b5d690712c55ec64a703cdefd56

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

<<<<<<< HEAD
    onLogout()
    {
      console.log('hi');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
=======
>>>>>>> e2df5e3bfb5e2b5d690712c55ec64a703cdefd56
}
