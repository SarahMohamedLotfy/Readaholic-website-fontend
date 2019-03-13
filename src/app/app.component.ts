import { HttpService } from './http.service';
import { Component } from '@angular/core';

import { book } from './classes/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  //books ={};
  //dataset:book[];
  
  constructor(private httpser:HttpService){}
  ngOnInit(){
    /*
this.books=this.httpser.getdata();
this.httpser.getBooks().subscribe(
  data =>{
    this.dataset=data ;
 */
  }
  
  
  





  }



