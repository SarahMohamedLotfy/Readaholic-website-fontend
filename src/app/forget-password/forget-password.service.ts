import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of logging in and out requests */
@Injectable({
    providedIn: 'root'
  })

  export class ForgetPasswordService {
  url:string=AppConstants.baseURL;
 //url:string='http://0ea47257.ngrok.io';
    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with the email and password to checks if they're correct */
 check(token:string): Observable<any>
 {
   return this.http.get(this.url+'/api/checktoken?token='+token) ;
 }
 changePass(password:string,password_confirmation:string,userId:number)
 {
     return this.http.post(this.url+'/api/resetpassword',{password,password_confirmation,userId});
 }

 verify(): Observable<any>
 {
     return this.http.get(this.url+'/api/verify');
 }

 checkVerify(token:string): Observable<any>
 {
     return this.http.get(this.url+'/api/checktokenverify?token='+token);
 }


}