import { book } from './../classes/book';
import { HttpService } from './../http.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { updates } from '../classes/updates';
import { actor } from '../classes/actor';
import { action } from '../classes/action';
import { ActionSequence } from 'protractor';
import { profile } from '../classes/profile';
import { Router } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { StarComponent } from '../shared/star/star.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@NgModule({
  declarations: [
    
    DropdownComponent,
    NavbarComponent,
    StarComponent
 ] })
 /**
 * Home is where updates are viewed
 */
export class HomeComponent implements OnInit {
 updatess:updates[];
 actors:actor[];
 actions:action[];
 book:book[];
  error: any;
 profile:profile;


  constructor(private httpser:HttpService,private router:Router) {
   
   }

  ngOnInit(){
    this.httpser.getUpdates().subscribe(
        data =>{
          this.updatess=data ;
          this.loadData();
       }, error => this.error = error);
       /*
    this.httpser.getUserInfo().subscribe(
      data=>{
        this.profile=data;
      }
     
    )*/
    }
    /**
 * function loadData is for checking type of updates and managing its html
 */
     loadData(){
       var i;
  
       for(i=0;i<this.updatess.length;i++){
      console.log('iteration');
    if ( this.updatess[i].update_type === '0' && !(this.updatess[i].rating)){
     this.updatess[i].actionText=" reviewed a book " ;
     console.log("reviewed"); 
    }
    if ( this.updatess[i].update_type === '0' && !(this.updatess[i].body)){
  
    this.updatess[i].actionText=" rated a book " ;
    console.log("rated"); 
    }
    if ( this.updatess[i].update_type === '1' && this.updatess[i].shelf === 1){
    this.updatess[i].actionText=" read a book " ;
    console.log("any"); 
    }
    if (  this.updatess[i].update_type === '1' && this.updatess[i].shelf === 2){
        this.updatess[i].actionText=" is currently reading a book " ;
        console.log("any"); 
      }
      if (  this.updatess[i].update_type === '1' && this.updatess[i].shelf === 3){
          console.log("any"); 
          this.updatess[i].actionText=" wants to read a book " ;
    
        }
      if ( this.updatess[i].update_type === '2'){//follow
          console.log("follow");
        this.updatess[i].actionText=" started following  : " ;
      }
      if (  this.updatess[i].update_type === '3'){//like
          console.log("liked");
          this.updatess[i].actionText=" liked a review  " ;

        }
        if (  this.updatess[i].update_type === '4'){//comment
            console.log("commented");
            this.updatess[i].actionText=" commented on a review " ;
      
          }
       }
          }
     
    
    onLogout()
    {
     
      this.httpser.logOut().subscribe(
        res=>{localStorage.removeItem('token');
        this.router.navigate(['/login']);

        },err=>this.error=err)

        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      
    }
}
