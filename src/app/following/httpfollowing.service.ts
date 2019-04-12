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
  return this.http.get('http://ffb1e410.ngrok.io/api/following');

}
 /**
 * unfollow () is a post request to remove the data of certain user from the followers of the main user the data is  ( name of user , image , id of user ).
 */
unfollow(id: number): Observable<any> {
      return this.http.delete('http://ffb1e410.ngrok.io/api/following/'+id )
    }

    /**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading by the name of following .
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
    getfollowingg(name:string){
      return this.http.get('http://ffb1e410.ngrok.io/api/following/'+name);
    
    } 
    
}
