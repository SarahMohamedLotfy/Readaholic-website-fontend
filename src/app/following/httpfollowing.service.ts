import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followingComponent } from '../classes/followingComponent';

@Injectable({
  providedIn: 'root'
})
/**handles Followers list related http requests */
export class HttpFollowinggService {

  constructor(private http:HttpClient) { }

  
 /**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
getfollowing(){
  return this.http.get('https://my-json-server.typicode.com/SarahMohamedLotfy/ggfollow/following');

}


}
