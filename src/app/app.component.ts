
import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { LogInHttpService } from './log-in/log-in-http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Readholic';
  
  constructor(private service:LogInHttpService,private router:Router){
    
  }
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



