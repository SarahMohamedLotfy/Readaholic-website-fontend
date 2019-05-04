
import { AppConstants } from './../../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { notifications } from 'src/app/classes/notifications';
import Pusher from 'pusher-js';
import { data } from 'src/app/classes/data';
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
<<<<<<< HEAD
<<<<<<< HEAD
    users:any;
    id:number;
    message:data;
     
   
=======
=======
>>>>>>> fd0459842a2c3240958491751e586802400bd062
    
    users:any=JSON.parse(localStorage.getItem('user')) ;
    
    id:number;
<<<<<<< HEAD
>>>>>>> fd0459842a2c3240958491751e586802400bd062
=======
>>>>>>> fd0459842a2c3240958491751e586802400bd062
    private subject: Subject<notifications> = new Subject<notifications>();
    isUser:boolean;
   
    private pusherClient: Pusher
    constructor(private http: HttpClient) {
<<<<<<< HEAD
<<<<<<< HEAD
       
    if(localStorage.getItem('token')== null){
      
    }else{
      this.users=JSON.parse(localStorage.getItem('user')) ;
      this.id=this.users.userInfo.id ;
    
=======
=======
>>>>>>> fd0459842a2c3240958491751e586802400bd062

      if(localStorage.getItem('token')== null){
        this.isUser=false
      }else{
        this.id==this.users.userInfo.id ;
        this.isUser=true ;
<<<<<<< HEAD
>>>>>>> fd0459842a2c3240958491751e586802400bd062
=======
>>>>>>> fd0459842a2c3240958491751e586802400bd062
        console.log(this.users);
        console.log(this.id);
        this.pusherClient = new Pusher('aa5ca7b55f8f7685a9cc',{ cluster: 'eu' });

        const channel = this.pusherClient.subscribe('user.'+this.id);

        channel.bind(
          'notify',
          data => {
            this.message=data.message;
            console.log(this.message);
            if(this.message.type == 0 && this.message.review_user_id == this.id)
            alert(this.message.user_name+'liked your review');
              else if(this.message.type ==1 && this.message.review_user_id == this.id )
               alert(this.message.user_name+'commented on your review');
            else if(this.message.type == 0 )
          alert(this.message.user_name+'liked '+this.message.review_user_name+'review');
            else if(this.message.type ==1 )
             alert(this.message.user_name+'commented on'+this.message.review_user_name+'s review');
            else if(this.message.type ==2)
             alert(this.message.user_name+'followed you');
           
            //alert(this.message.user_name+);
            //console.log(data);
          }
<<<<<<< HEAD
<<<<<<< HEAD
          
        );
        }
=======
=======
>>>>>>> fd0459842a2c3240958491751e586802400bd062
        );}
     
>>>>>>> fd0459842a2c3240958491751e586802400bd062
     }
     getnotifItems(): Observable<notifications> {
        return this.subject.asObservable();
      }
    /**
     * updates get requests
     */
   
    url:string=AppConstants.baseURL;
    getNotifications(): Observable<any> {
        return this.http.get(this.url+"/api/notification")
            .pipe(retry(4), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
        
    }
    onRead(idd:number):Observable <any>{
      
      console.log("any");
return this.http.post(this.url+'/api/mark_notification',{"id" : idd});
//.pipe(retry(4),catchError(this.handleError));
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
  
}
