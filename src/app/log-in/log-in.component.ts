import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import {  NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { user } from '../classes/user';
import { user_shelves } from '../classes/user_shelves';
import { LogInHttpService } from './log-in-http.service';
import { data } from '../classes/data';

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
  formReset:FormGroup;
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

  books:any[];
  numbers:number[];
  searchTerm:string;

  resetError:boolean=false;
  resetText:string;
  resetMes:string;
  resetSuc:boolean;


  
/**sets the varibales in the form using form builder */
  constructor(private service:LogInHttpService,private fb:FormBuilder,private router:Router) { 
    this.numbers = Array(4).fill(0).map((x,i)=>i);
    this.form=this.fb.group({
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['',[Validators.required,Validators.minLength(5)]]
    });

    this.formUp=this.fb.group({
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['',[Validators.required,Validators.minLength(5)]],
      password_confirmation: ['',[Validators.required,Validators.minLength(5)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      gender: ['',[Validators.required,Validators.minLength(1)]],
      birthday:['',[Validators.required]],
      country: ['',[Validators.required,Validators.minLength(3)]],
      city:['',[Validators.required,Validators.minLength(3)]]
      });

      this.formReset=this.fb.group({
        email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],

         });


    
 
    
  }

  get gender() { return this.formUp.get('gender'); }
  get email() { return this.formUp.get('email'); }
  get name() { return this.formUp.get('name'); }
  get country() { return this.formUp.get('country'); }
  get city() { return this.formUp.get('city'); }
  get password() { return this.formUp.get('password'); }
  get password_confirmation() { return this.formUp.get('password_confirmation'); }
  
  /**Checks if the guest is already logged in or not if already logged in it re routes them automaticaly to the home page */
  ngOnInit() {
    
   if(localStorage.getItem('token')!=null)
    this.router.navigateByUrl('/home');

    this.service.getBookByGenre('action').subscribe((books:any)=>{
      this.books =books.pages ;
     
      console.log(this.books);
    
    
      },err=>{})
    
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
  localStorage.setItem('user',JSON.stringify({userInfo:this.users}));
  this.router.navigateByUrl('/home');
  this.wrongPass=false;
 // console.log(this.users);
 //this.users=JSON.parse(localStorage.getItem('user'));
 //console.log(this.users);
},
err => {
  if(err.status ==405)
  {
  
  this.wrongPass=true;
  this.error=err.error.errors;

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
  this.signUpError=false;
if(this.formUp.valid){
  if(val.password!=val.password_confirmation)
  {
    this.signUpError=true;
    this.errorUp="Password and password confirmation don't match"
  }
  else
  {
  this.service.signUp(val.email,val.password,val.password_confirmation,val.name,val.gender,val.birthday,val.country,val.city).subscribe(
(data:any) => {
  localStorage.setItem('token',data.token);
  this.users=data;
  this.service.verify().subscribe((data:any)=>{
    console.log(data);
  
  },err=>{console.log(err);});
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
  );}}
  else{
    this.signUpError=true;
  this.errorUp="you must fill all boxes"

  }

 

  }
reset(){
  const val = this.formReset.value;
  this.resetError=false;
  this.resetSuc=false
  if(this.formReset.valid){
  this.service.resetPass(val.email).subscribe(
    (data:any)=>{console.log(data);
      this.resetSuc=true;
      this.resetMes='An email was sent to you to reset your password'
    },err=>{
      console.log(err);
      this.resetError=true;
      this.resetText=err.error.error;
    }
  )
 ;}
 else{
   this.resetError=true;
   this.resetText='You must enter a valid email';
 }


}

search(){
  console.log(this.searchTerm);
  this.router.navigate(['/searchBooks'],{queryParams:{'search':this.searchTerm,'searchType':'title'}});
  
}


/**Checks changes if the user enter a wrong password */
ngOnChanges(): void{
 
  this.wrongPass=this.wrongPass;
  this.error=this.error;
  this.errorUp=this.errorUp;
  this.signUpError=this.signUpError;
}


  

}
