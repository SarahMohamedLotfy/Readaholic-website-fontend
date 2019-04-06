import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBooks } from '../classes/myBooks';

/**Handles http requests related to the boks of the user*/

@Injectable({
  providedIn: 'root'
})
export class HttpmybooksService {
/**
 * Constructor for httpmyBooks service . 
 
*/
  constructor(private http:HttpClient) { }

  
 /**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
getMybooks(){
  return this.http.get('http://localhost:3000/following');

}
url = 'http://localhost:3000';

/**
 *getUsershelves() is a get request to number of books the user read and currently reading an to read */

getUsershelves(): Observable<any>{
  return this.http.get<any>(this.url+"/user_shelf");
}
}
