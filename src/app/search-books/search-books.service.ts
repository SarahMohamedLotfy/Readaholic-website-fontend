import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  export class SearchBooksService {


    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}

    getBookByTitle(title:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/Books/book_title?title='+title);
        
       }

       getBookByGenre(genre:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/books/genre?genreName='+'Young Adult,Historical,Fiction,Adult');
        
       }

       getBookByAuthor(Author:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/Books/book_Authorname?Author_name='+Author);
        
       }
       getBookByIsbn(Isbn:number): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/Books/book_ISBN?ISBN='+Isbn);
        
       }
    
    }