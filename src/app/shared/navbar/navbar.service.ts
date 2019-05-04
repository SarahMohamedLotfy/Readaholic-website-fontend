
import { AppConstants } from './../../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { notifications } from 'src/app/classes/notifications';
import Pusher from 'pusher-js';
@Injectable({
    providedIn: 'root'
})
/**
 * Home service is responsible for http get requests od updates
 */
export class navBarService {
    /**
     * we pass an object of httpclient to the constuctor
     */
    
    users:any=JSON.parse(localStorage.getItem('user')) ;
    
    id:number;
    private subject: Subject<notifications> = new Subject<notifications>();
    isUser:boolean;
   
    private pusherClient: Pusher
    constructor(private http: HttpClient) {

      if(localStorage.getItem('token')== null){
        this.isUser=false
      }else{
        this.id==this.users.userInfo.id ;
        this.isUser=true ;
        console.log(this.users);
        this.pusherClient = new Pusher('aa5ca7b55f8f7685a9cc',{ cluster: 'eu' });

        const channel = this.pusherClient.subscribe('users'+this.id);

        channel.bind(
          'notify',
          function(data) {
            alert(JSON.stringify(data));
            console.log(data);
          }
        );}
     
     }
     getnotifItems(): Observable<notifications> {
        return this.subject.asObservable();
      }
    /**
     * updates get requests
     */
   
    url:string=AppConstants.baseURL;
    getNotifications(): Observable<notifications[]> {
        return this.http.get<notifications[]>(this.url+"/api/notification")
            .pipe(retry(4), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
        
    }
    onRead(id:number):Observable <any>{
return this.http.post(this.url+"/api/mark_notification/",{"id" : id}).
pipe(retry(4),catchError(this.handleError));
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
