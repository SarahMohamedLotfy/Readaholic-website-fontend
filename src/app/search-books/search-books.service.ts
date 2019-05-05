import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**http service for searching for books */
@Injectable({
    providedIn: 'root'
  })

  export class SearchBooksService {
    /**@ignore */
url:string=AppConstants.baseURL;

    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}
/**searchs for books by their title and returns them */
    getBookByTitle(title:string): Observable<any> {
      // return this.http.get<any>('http://localhost:3000/getBookByTitle?title='+ title);
     return this.http.get<any>(this.url+'/api/Books/book_title?title='+title);
        
       }
/**searchs for books by their genre and returns them */
       getBookByGenre(genre:string): Observable<any> {
       // return this.http.get<any>('http://localhost:3000/getBookByGenre?genre='+ genre);
        return this.http.get<any>(this.url+'/api/books/genre?genreName='+genre);
        
       }
/**searchs for books by their author name and returns them */
       getBookByAuthor(Author:string): Observable<any> {
       // return this.http.get<any>('http://localhost:3000/getBookByAuthor?author_name='+ Author);
        return this.http.get<any>(this.url+'/api/Books/book_Authorname?Author_name='+Author);
        
       }
       /**searchs for books by their isbn and returns them */
       getBookByIsbn(Isbn:number): Observable<any> {
       // return this.http.get<any>('http://localhost:3000/getBookByISBN?isbn='+ Isbn);
        return this.http.get<any>(this.url+'/api/Books/book_ISBN?ISBN='+Isbn);
        
       }
    
    }