import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/** insert the service in the root of the application */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  /** create http object in the constructor to use httpClient  */
  constructor( private http: HttpClient ) { }
 /** url of localhost */
  url = 'http://5cb4a97d.ngrok.io/api/';
   /** http request to get user profile info  */
  getUserprofile(id: number): Observable<any> {

    return this.http.get<any> (this.url+'showProfile?id='+ id );
  }
/** http request to get authenticated user profile info */
  getAuthUserprofile(): Observable<any> {
    return this.http.get<any> (this.url+'showProfile');
  }

  getUpdatesForuser(id: number):Observable<any>{
    return this.http.get(this.url+"updates?id="+ id);
       }

  getUsershelves(): Observable<any> {
    return this.http.get(this.url+'shlef/list');
  }

}
