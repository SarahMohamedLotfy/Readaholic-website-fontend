import { HttpService } from './http.service';
import { Component } from '@angular/core';

import { book } from './classes/book';
import { user } from './classes/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Readholic';
  user:user ;
<<<<<<< HEAD

  

  constructor(){}
=======
  constructor(private service:HttpService,private router:Router){
    
  }
>>>>>>> 4d2611431bb276a64f771c5a0f48b42c32299448
  ngOnInit(){
    
  }
  error:any;
loggedIn:boolean;
  onLogout()
    {
     
      
      this.service.logOut().subscribe(
        res=>{localStorage.removeItem('token');
        this.router.navigate(['/login']);

        },err=>this.error=err)

        
      
    }

    
    ngOnChanges(){
     
    }

    





  }



