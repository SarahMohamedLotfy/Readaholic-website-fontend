import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of changing password and verifying email */
@Injectable({
    providedIn: 'root'
  })

  export class ForgetPasswordService {
      /**@ignore */
  url:string=AppConstants.baseURL;
 //url:string='http://0ea47257.ngrok.io';
    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with token to checks if they're correct */
 check(token:string): Observable<any>
 {
   return this.http.get(this.url+'/api/checktoken?token='+token) ;
 }
 /**send request with new password to change it */
 changePass(password:string,password_confirmation:string,userId:number)
 {
     return this.http.post(this.url+'/api/resetpassword',{password,password_confirmation,userId});
 }
/**send email to user to verify their email */
 verify(): Observable<any>
 {
     return this.http.get(this.url+'/api/verify');
 }
/**check token for the verify request */
 checkVerify(token:string): Observable<any>
 {
     return this.http.get(this.url+'/api/checktokenverify?token='+token);
 }


}