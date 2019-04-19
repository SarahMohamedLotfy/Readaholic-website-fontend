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
   return this.http.post('http://ec2-3-87-221-152.compute-1.amazonaws.com/api/login',{email,password}) ;
 }

 
/**Sends a request to server with the variables that user entered to sign up a new user */
 signUp(email:string,password:string,password_confirmation:string,name:string,gender:string,birthday:Date,country:string,city:string): Observable<any>
 {
   return this.http.post('http://ec2-3-87-221-152.compute-1.amazonaws.com/api/signup',{email,password,password_confirmation,name,gender,birthday,country,city}) ;
 }
/**Loggs out the user from the website */
 logOut():Observable<any>{
    return this.http.delete('http://ec2-3-87-221-152.compute-1.amazonaws.com/api/logout');
  }
  }
  