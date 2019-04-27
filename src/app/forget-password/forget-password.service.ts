import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of logging in and out requests */
@Injectable({
    providedIn: 'root'
  })

  export class ForgetPasswordService {


    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with the email and password to checks if they're correct */
 check(token:string): Observable<any>
 {
   return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/checktoken?token='+token) ;
 }
 changePass(password:string,password_confirmation:string,userId:number)
 {
     return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/resetpassword',{password,password_confirmation,userId});
 }


}