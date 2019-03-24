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
   /** http request to get user profile info from json server */
  getUserprofile(id: number): Observable<any> {
    return this.http.get<any> (this.url +"/profile/"+ id );
  }
  /** http request to get the user followings from json server */
  getfollowing(): Observable<any> {
    return this.http.get<any>('http://my-json-server.typicode.com/SarahMohamedLotfy/followlast/following');
  }

}
