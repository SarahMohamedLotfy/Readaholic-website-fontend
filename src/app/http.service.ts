import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { followingComponent } from './classes/followingComponent';
import { followerComponent } from './classes/followerComponent';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url = 'http://localhost:3000';

  constructor(private http:HttpClient) {}

  getdata(){
return this.http.get('http://localhost:3000/author').subscribe(data =>
console.log("wegot",data));
  }
 getreviews():Observable<any>{
return this.http.get('http://localhost:3000/author');

 }
 getBooks():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');

}



   getUpdates():Observable<any>{

     return this.http.get("http://localhost:3000/updates").pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error

    );
   }
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
 
 

 getUserprofile(id: number): Observable<any> {
  return this.http.get<any> (this.url + `/profile/${id}`);
}

//getUserfollowings(): Observable<following[]> {
 //return this.http.get<following[]> (this.url + `/following`);
//}



/**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
getfollowing(){
  return this.http.get('http://my-json-server.typicode.com/SarahMohamedLotfy/followlast/following');

}

 /**
 * Getfollowing () is a get request to get the data of the followers of the main user .
 * The data i get is ( name of user , image , id of user  ).
 */

getfollowers(){
  return this.http.get('https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following');

   }

}