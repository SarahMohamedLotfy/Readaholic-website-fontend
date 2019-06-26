import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of logging in and out requests */
@Injectable({
    providedIn: 'root'
  })

  export class LogInHttpService {
/**@ignore */
  url:string=AppConstants.baseURL;

    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with the email and password to checks if they're correct */
 login(email:string,password:string): Observable<any>
 {
   return this.http.post('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/login',{email,password}) ;
 }


/**Sends a request to server with the variables that user entered to sign up a new user */
 signUp(email:string,password:string,password_confirmation:string,name:string,gender:string,birthday:Date,country:string,city:string): Observable<any>
 {
   return this.http.post('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/signup',{email,password,password_confirmation,name,gender,birthday,country,city}) ;
 }
/**Loggs out the user from the website */
 logOut():Observable<any>{
    return this.http.delete('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/logout');
  }
/**resets the password of the user by sending him an email to use for creating a new pass */
  resetPass(email:string): Observable<any> {
        
    return this.http.post<any>('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/forgotpassword',{email});
    
   }
/**request send to users when they sign up to send them an email to verify their email account */
   verify(): Observable<any>
   {
       return this.http.get('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/verify');
   }

  /**request that search for books by there genre */ 
   getBookByGenre(genre:string): Observable<any> {
        
    return this.http.get<any>('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/books/genre?genreName='+genre);
    
   }

   /**searchs for books by their title and returns them */
   getBookByTitle(title:string): Observable<any> {
        
    return this.http.get<any>('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/Books/book_title?title='+title);
    
   }
  
  }
  
