import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  
  export class LogInHttpService {
    constructor(private http:HttpClient) {}

    url = 'http://localhost:3000';

    login(email:string,password:string): Observable<any>
 {
   return this.http.post(this.url+'/login',{email,password}) ;
 }

 logOut():Observable<any>{
    return this.http.get(this.url+'/logOut');
  }
  }