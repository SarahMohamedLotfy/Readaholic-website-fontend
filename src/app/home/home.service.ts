import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
/**
 * Home service is responsible for http get requests od updates 
 */
export class HomeService {


/**
 * we pass an object of httpclient to the constuctor
 */
  constructor(private http:HttpClient) {}


/**
 * updates get requests
 */
   getUpdates():Observable<any>{
<<<<<<< HEAD
return this.http.get("http://972c6e5d.ngrok.io/api/updates")
=======
return this.http.get("http://a6df2b7f.ngrok.io/api/updates")
>>>>>>> 44abdb8cd6dba3177b7b922ce896b51c161e905c
.pipe(
      retry(3), // retry a failed request up to 3 times
    catchError(this.handleError) // then handle the error

    );
   }
<<<<<<< HEAD
   addFollowing (nb):Observable<any> {
  return this.http.post('http://972c6e5d.ngrok.io/api/follow',{"user_id" : nb});
  } 
  addBook(shelf,book_id):Observable<any>{
    return this.http.post('http://972c6e5d.ngrok.io/api/shelf/add_book',{"shelf_id": shelf,
=======
   addFollowing ( nb):Observable<any> {
  return this.http.post('http://a6df2b7f.ngrok.io/api/follow',{"user_id" : nb});
  } 
  addBook(shelf,book_id):Observable<any>{
    return this.http.post('http://a6df2b7f.ngrok.io/api/shelf/add_book',{"shelf_id": shelf,
>>>>>>> 44abdb8cd6dba3177b7b922ce896b51c161e905c
    "book_id": book_id});
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