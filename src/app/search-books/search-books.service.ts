import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  export class SearchBooksService {
url:string=AppConstants.baseURL;

    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}

    getBookByTitle(title:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/Books/book_title?title='+title);
        
       }

       getBookByGenre(genre:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/books/genre?genreName='+genre);
        
       }

       getBookByAuthor(Author:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/Books/book_Authorname?Author_name='+Author);
        
       }
       getBookByIsbn(Isbn:number): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/Books/book_ISBN?ISBN='+Isbn);
        
       }
    
    }