import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { followerComponent } from '../classes/followerComponent';
import { AppConstants } from '../classes/appconstant';


import { nbind } from 'q';

/**
 * handles  http requests of followers list 
 
*/
@Injectable({
  providedIn: 'root'
})
/**
 * handles  http requests of followers list 
*/

export class HttpFollowingService {
/**
 * Constructor for httpfollower service . 
 
*/
  constructor(private http:HttpClient) { }
  /**
 * The url of the database.
 */
  url: string=AppConstants.baseURL ;
  
 /**
 * Getfollowers () is a get request to get the data of the followers of the main user .
 * The data i get is ( name of user , image , id of user  ).
 */

getfollowers(){
  return this.http.get('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/followers');

   }
   
  /**
 * addFollowing () is a post request responsible for follow button it takes the id of the user to add it in following list.
 */
  addFollowing ( nb):Observable<any> {
    return this.http.post('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/follow',{"user_id" : nb});
    } 
  
 /**
 *Getfollowing () is a get request to get the data of people following the not auth user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
getnotauthfollowing(id:number){
  return this.http.get('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/following?id='+ id);

}
/**
 *Getfollowing () is a get request to get the data of people following the main user 
 * and the books they are currently reading . 
 * The data i get is ( name of user , image of user  , id of user  , bookid,image of the book).
 */
getfollowing(){
  return this.http.get('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/following');

}
  /**
 * Unfollow is a post request resonsible for unfollow button it removes the data of certain user of this id from the followers of the main user the data is  ( name of user , image , id of user ).
 */
  unfollow ( user_id:number):Observable<any> {
      
    return this.http.delete('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/unfollow?user_id='+ user_id);
  }
 /**
     * Get the profile information i used it to get the  name of the user.
     *
     * */
  getUserprofile(id: number): Observable<any> {
    return this.http.get<any> ('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/showProfile/'+ id );
  }
  /**
     * Get the profile information i used it to get the  name of the user.
     *
     * */
  getAuthUserprofile(): Observable<any> {
    return this.http.get<any> ('http://ec2-34-205-32-73.compute-1.amazonaws.com/app/api/showProfile');
  }

}

