import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit, Input, Output,EventEmitter, NgModule } from '@angular/core';
import { LogInHttpService } from 'src/app/log-in/log-in-http.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { notifications } from 'src/app/classes/notifications';
import { navBarService } from "./navbar.service";
import { data } from 'src/app/classes/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
   
  constructor(private service:LogInHttpService,private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private httpser:navBarService) { }
  notifs:notifications[];
 isUser:boolean=true;
  ngOnInit() {
       if(localStorage.getItem('token')==null){
      this.isUser=false
    }else{this.isUser=true ;}
    this.httpser.getNotifications().subscribe(
      data =>{
        this.notifs=data ;
        console.log(data);
     }, error => this.error = error);
  }
  /**stores any error message recived  */
  error :any;
  searchTerm:string;
  @Output() clickBtn = new EventEmitter();
  /**On clicking the logout button it sends a request to the server to logout the user and if the response it gets from the server is positive it removes the token from the storage and redirects the user to the login page */
  onLogout()
    {
 
      this.service.logOut().subscribe(
        res=>{localStorage.removeItem('token');
        this.router.navigate(['/login']);
        
        },err => {
          if(err.status ==405)
          {
          
           localStorage.removeItem('token');
            this.router.navigate(['/login']);
            console.log(err);
          }
          
          else
          console.log(err);
        })
      
    }

    search(){
      this.router.navigate(['/searchBooks'],{queryParams:{'search':this.searchTerm,'searchType':'title'}});
      
      this.clickBtn.emit(this.searchTerm);
      
    }

}
