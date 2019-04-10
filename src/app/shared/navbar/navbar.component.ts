import { Component, OnInit, Input } from '@angular/core';
import { LogInHttpService } from 'src/app/log-in/log-in-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:LogInHttpService,private router:Router) { }

  ngOnInit() {
  
  }
  /**stores any error message recived  */
  error :any;
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
          }
          
          else
          console.log(err);
        })



        
      
    }

}
