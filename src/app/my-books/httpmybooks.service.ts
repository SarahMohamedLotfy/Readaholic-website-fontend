import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBooks } from '../classes/myBooks';
import { nbind } from 'q';

/**Handles hhttp requests related to the books of the user*/

@Injectable({
  providedIn: 'root'
 
})
/**Handles hhttp requests related to the books of the user*/
export class HttpmybooksService {
  /**Handles h
 *url of the database.*/
  urll: string = 'http://ec2-52-90-5-77.compute-1.amazonaws.com';
/**
 * Constructor for httpmyBooks service . 
 
*/
  constructor(private http:HttpClient) { }

  
 /**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , avgrating , date o publication , date read).
 */
getMybooks(){
  return this.http.get(this.urll +'/api/following');
}
/**
 *getMyshelfbooks() is a get request to get the data of the books of certain shelf of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , avgrating , date o publication , date read).
 */
getMyshelfbooks( shelf_name:number){
  return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/shelf?shelf_name='+shelf_name);
}
/**
 *gethisshelfbooks() is a get request to get the data of the books of certain shelf of the not auth user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , avgrating , date o publication , date read).
 */
gethisshelfbooks( shelf_name:number,user_id:number){
  return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/shelf?user_id='+user_id
  +'&&shelf_name='+shelf_name);
}
/**
     * Get the profile information i used it to get the  name of the user.
     * */
    getUserprofile(id: number): Observable<any> {
      return this.http.get<any> ('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/showProfile/'+ id );
    }
     /**
     * Get the profile information i used it to get the  name of the user.
     * */
    getAuthUserprofile(): Observable<any> {
      return this.http.get<any> ('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/showProfile');
    }
  


}
