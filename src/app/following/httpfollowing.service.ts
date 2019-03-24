import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followingComponent } from '../classes/followingComponent';

/**Handles http requests related to people following the main user*/

@Injectable({
  providedIn: 'root'
})
export class HttpFollowinggService {
/**
 * Constructor for httpfollowng service . 
 
*/
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
