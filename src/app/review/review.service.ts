import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
/**
 * Home service is responsible for http get requests od updates
 */
export class ReviewService {
    /**
     * we pass an object of httpclient to the constuctor
     */
    constructor(private http: HttpClient) { }
   url:string=AppConstants.baseURL;
    getReview(userid:number,bookid:number): Observable<any> {
        return this.http.get(this.url+'/api/showReviewForBookForUser?bookId='+ bookid +'&userId='+userid)
            .pipe(retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }
    /**
   * function for handling errors in ui and in console
   */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
}