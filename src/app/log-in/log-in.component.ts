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
 /**stores the input typed in the signup form */
  formUp:FormGroup;
  /**stores the information of the user logged in */
  users:user;
  /**true if user entered wrong pass or username, false otherwise */
  wrongPass:boolean;
  /** stores in it the error message for logging in */
  error:string;
/**stores in it the error message for signin up */
  errorUp:string;
/**true if there is an error in signing up false otherwise */
  signUpError:boolean;

  
/**sets the varibales in the form using form builder */
  constructor(private service:LogInHttpService,private fb:FormBuilder,private router:Router) { 
    this.form=this.fb.group({
    email: ['',[Validators.required,Validators.minLength(1)]],
    password: ['',[Validators.required,Validators.minLength(1)]]
    });

    this.formUp=this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      password_confirmation: ['',[Validators.required]],
      name:['',[Validators.required]],
      gender: ['',[Validators.required]],
      birthday:['',[Validators.required]],
      country: ['',[Validators.required]],
      city:['',[Validators.required]]
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
  console.log(data);
  localStorage.setItem('token',data.token);
  this.users=data.user;
  this.router.navigateByUrl('/home');
  this.wrongPass=false;
  console.log(this.users);
},
err => {
  if(err.status ==405)
  {
  
  this.wrongPass=true;
  this.error=err.error.errors;
  console.log(err);
 
  
  }
  else if(err.status== 404)
  {
    console.log('udd');
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
/**on clicking the sign up button it sends the variables entered in the login form to the server and checks the response if they're valid it signs up the user and redirects them to the home page and stores  the token and the user information recieved from the service if not it shows an error message */
onSigUp(){
  const val = this.formUp.value;

  
  this.service.signUp(val.email,val.password,val.password_confirmation,val.name,val.gender,val.birthday,val.country,val.city).subscribe(
(data:any) => {
  localStorage.setItem('token',data.token);
  this.users=data;
  this.router.navigateByUrl('/home'); 
},
err => {
  if(err.status ==405)
  {
  this.signUpError=true;
  this.errorUp=err.error.errors;
  
  }
  else if(err.status== 404)
  {
    this.signUpError=true;
  this.errorUp=err.error.errors;

  console.log(err);
  }
  else
  console.log(err);
}
  );

 

  }

/**Checks changes if the user enter a wrong password */
ngOnChanges(): void{
  this.wrongPass=this.wrongPass;
  this.error=this.error;
  this.errorUp=this.errorUp;
  this.signUpError=this.signUpError;
}


  

}
