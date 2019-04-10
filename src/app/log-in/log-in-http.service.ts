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
   return this.http.post('cd5885f7.ngrok.io/api/login',{email,password}) ;
 }

/**Loggs out the user from the website */
 logOut():Observable<any>{
    return this.http.get('http://localhost:3000/logOut');
  }
  }