import { AppConstants } from './../classes/appconstant';
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
  url :string=AppConstants.baseURL;
   /** http request to get user profile info  */
  getUserprofile(id: number): Observable<any> {

    return this.http.get<any> (this.url+'/api/showProfile?id='+ id );
  }
/** http request to get authenticated user profile info */
  getAuthUserprofile(): Observable<any> {
    return this.http.get<any> (this.url+'/api/showProfile');
  }

  getUpdatesForuser(id: number):Observable<any>{
    return this.http.get(this.url+"/api/updates?user_id="+ id);
       }

  getUsershelves(): Observable<any> {
    return this.http.get(this.url+'/api/shlef/list');
  }
  getMyshelfbooks( shelf_name:number){
    return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/shelf?shelf_name='+shelf_name);

  }

  getfollowersforusers(id:number): Observable<any> {
    return this.http.get(this.url+'/api/following?id='+ id )
  }


}
