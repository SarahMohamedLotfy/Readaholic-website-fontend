import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of logging in and out requests */
@Injectable({
    providedIn: 'root'
  })

  export class LogInHttpService {


    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with the email and password to checks if they're correct */
    login(email:string,password:string): Observable<any>
 {
<<<<<<< HEAD
   return this.http.post('http://972c6e5d.ngrok.io/api/login',{email,password}) ;
=======
   return this.http.post('http://a6df2b7f.ngrok.io/api/login',{email,password}) ;
>>>>>>> 44abdb8cd6dba3177b7b922ce896b51c161e905c
 }

 
/**Sends a request to server with the variables that user entered to sign up a new user */
 signUp(email:string,password:string,password_confirmation:string,name:string,gender:string,birthday:Date,country:string,city:string): Observable<any>
 {
   return this.http.post('http://a6df2b7f.ngrok.io/api/signup',{email,password,password_confirmation,name,gender,birthday,country,city}) ;
 }
/**Loggs out the user from the website */
 logOut():Observable<any>{
<<<<<<< HEAD
    return this.http.delete('http://972c6e5d.ngrok.io/api/logout');
=======
    return this.http.delete('http://a6df2b7f.ngrok.io/api/logout');
  }
>>>>>>> 44abdb8cd6dba3177b7b922ce896b51c161e905c
  }
