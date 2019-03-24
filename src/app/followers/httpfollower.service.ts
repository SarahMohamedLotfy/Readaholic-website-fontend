import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followerComponent } from '../classes/followerComponent';

@Injectable({
  providedIn: 'root'
})
/**handles Followers list related http requests */
export class HttpFollowingService {

  constructor(private http:HttpClient) { }

  
 /**
 * Getfollowing () is a get request to get the data of the followers of the main user .
 * The data i get is ( name of user , image , id of user  ).
 */

getfollowers(){
  return this.http.get('https://my-json-server.typicode.com/SarahMohamedLotfy/ggfollow/following');

   }

}
