import { AppConstants } from './../classes/appconstant';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
/**
 * Home service is responsible for http get requests od updates 
 */
export class HomeService {
url:string=AppConstants.baseURL ;

/**
 * we pass an object of httpclient to the constuctor
 */
  constructor(private http:HttpClient) {}


/**
 * updates get requests
 */
   getUpdates():Observable<any>{
return this.http.get(this.url+'/api/updates')
.pipe(
      retry(3), // retry a failed request up to 3 times
    catchError(this.handleError) // then handle the error

    );
   }
  /**
        * function addfollowing is trigeered when user follow someone
        */
   addFollowing (nb):Observable<any> {
  return this.http.post('http://ec2-34-205-32-73.compute-1.amazonaws.com/app'/api/follow',{"user_id" : nb});
  } 
  addBook(shelf,book_id):Observable<any>{
    return this.http.post('http://ec2-34-205-32-73.compute-1.amazonaws.com/app'/api/shelf/add_book',{"shelf_id": shelf,
    "book_id": book_id});
  }
  /**
        * function is trigeered when user unfollow someone
        */
  unfollow ( user_id:number):Observable<any> {
      
    return this.http.delete('http://ec2-34-205-32-73.compute-1.amazonaws.com/app'/api/unfollow?user_id='+ user_id);
  }
  
  /**
 * function for handling errors in ui and in console
 */
   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}