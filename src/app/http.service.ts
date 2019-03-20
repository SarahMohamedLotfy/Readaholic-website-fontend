import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { following } from './classes/following';

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
  getBook(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/book/" + id);
 }

 getBookReviews(): Observable<any> {
   return this.http.get("http://localhost:3000/review");
 }

 login(email:string,password:string)
 {
   return this.http.post("https://reqres.in/api/login?fbclid=IwAR05ivnPeZcoY3NF04Dt-1wve-YdIt6sw6KMyapYITRVxzdxjrNhyULkwFk",{email,password});

 }

 getUserprofile(id: number): Observable<any> {
  return this.http.get<any> (this.url + `/profile/${id}`);
}

getUserfollowings(): Observable<following[]> {
 return this.http.get<following[]> (this.url + `/following`);
}


}
