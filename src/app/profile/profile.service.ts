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
  url = 'http://localhost:3000';
   /** http request to get user profile info  */
  getUserprofile(id: number): Observable<any> {

    return this.http.get<any> ('http://ec2-3-87-221-152.compute-1.amazonaws.com/showProfile?id='+ id );
  }
/** http request to get authenticated user profile info */
  getAuthUserprofile(): Observable<any> {
    return this.http.get<any> ('http://ec2-3-87-221-152.compute-1.amazonaws.com/showProfile');
  }



}
