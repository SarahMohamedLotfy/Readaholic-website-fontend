import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followerComponent } from '../classes/followerComponent';
/**
 * handles  http requests of followers list 
 
*/
@Injectable({
  providedIn: 'root'
})

export class HttpFollowingService {
/**
 * Constructor for httpfollower service . 
 
*/
  constructor(private http:HttpClient) { }

  
 /**
 * Getfollowing () is a get request to get the data of the followers of the main user .
 * The data i get is ( name of user , image , id of user  ).
 */

getfollowers(){
  return this.http.get('http://localhost:3000/followers');

   }
   addFollowing (followwing: followerComponent): Observable<followerComponent> {
    return this.http.post<followerComponent>('http://localhost:3000/following', followwing)
      
  } 
}
