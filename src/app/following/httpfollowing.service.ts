import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followingComponent } from '../classes/followingComponent';
import { nbind } from 'q';
import {  HttpHeaders } from '@angular/common/http';

/**Handles http requests related to people following the main user*/

@Injectable({
  providedIn: 'root'
})
export class HttpFollowinggService {
/**
 * Constructor for httpfollowng service . 
 
*/
  constructor(private http:HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'text'
  }
 /**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
getfollowing(){
  return this.http.get('http://972c6e5d.ngrok.io/api/following');

}
 /**
 * unfollow () is a post request to remove the data of certain user from the followers of the main user the data is  ( name of user , image , id of user ).
 */
/*unfollow(id: number): Observable<any> {
      return this.http.delete('http://be1989bd.ngrok.io/api/unfollow/'+id )
    }*/
    
    unfollow ( user_id:number):Observable<any> {
      
      return this.http.delete('http://972c6e5d.ngrok.io/api/unfollow?user_id='+ user_id);
    }
    

    /**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading by the name of following .
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
    getfollowingg(name:string){
      return this.http.get('http://972c6e5d.ngrok.io/api/following/'+name);
    
    } 
    
}
