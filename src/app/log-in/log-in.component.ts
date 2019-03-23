import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import {  NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { user } from '../classes/user';
import { user_shelves } from '../classes/user_shelves';
import { LogInHttpService } from './log-in-http.service';

/**The component that sets the login page html and css and the functionality of logging users in */
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  /**stores the input typed in the login form */
  form:FormGroup;
  /**stores the information of the user logged in */
  users:user;
  /**true if user entered wrong pass or username, false otherwise */
  wrongPass:boolean;

  error:string;
/**sets the varibales in the form using form builder */
  constructor(private service:LogInHttpService,private fb:FormBuilder,private router:Router) { 
    this.form=this.fb.group({
    email: ['',[Validators.required,Validators.minLength(1)]],
    password: ['',[Validators.required,Validators.minLength(1)]]
    });
    
 
    
  }
  
  /**Checks if the guest is already logged in or not if already logged in it re routes them automaticaly to the home page */
  ngOnInit() {
    if(localStorage.getItem('token')!=null)
    this.router.navigateByUrl('/home');
    
  }
  /**On clicking the login button it sends the email and password entered in the login form to the server and checks the response if they're valid it redirects them to the home page and stores  the token and the user information recieved from the service if not it shows an error message  */
onSubmit(){
  const val = this.form.value;
  if(this.form.valid){
  this.service.login(val.email,val.password).subscribe(
(data:any) => {
  localStorage.setItem('token',data.token);
  this.users=data;
  this.router.navigateByUrl('/home');
  this.wrongPass=false;
},
err => {
  if(err.status ==405)
  {
  console.log('incorrect username or password');
  this.wrongPass=true;
  this.error="incorrect username or password";
  
  }
  else if(err.status== 404)
  {
    this.wrongPass=true;
    this.error="incorrect username or password";}
  else
  console.log(err);
}
  );}

  else
  {
    this.wrongPass=true;
  this.error="You must enter username and password";
  }
}

/**Checks changes if the user enter a wrong password */
ngOnChanges(): void{
  this.wrongPass=this.wrongPass;
  this.error=this.error;
}


  

}
