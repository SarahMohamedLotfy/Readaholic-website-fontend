import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBooks } from '../classes/myBooks';

/**Handles http requests related to the boks of the user*/

@Injectable({
  providedIn: 'root'
})
export class HttpmybooksService {
  urll: string = 'http://ec2-52-90-5-77.compute-1.amazonaws.com';
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
getMyshelfbooks( shelf_name:number){
  return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/shelf?shelf_name='+shelf_name);

}
url = 'http://localhost:3000';

/**
 *getUsershelves() is a get request to number of books the user read and currently reading an to read */

getUsershelves(): Observable<any>{
  return this.http.get<any>(this.url+"/user_shelf");
}
/**
 * create book review
 * @param {number} bookId id of the reviewd book
 * @param {number} shelf the id of the shelf
 * @param {string} body the body of the review
 * @param {number rating the user rating of the book}
 *  */
createReview(bookId:number, shelf: number,  rating: number): Observable<any> {
 
    return this.http.post(this.url + '/api/reviwes/create',{bookId,shelf,rating});
  
  
   // return this.http.post('http://localhost:3000/ReadShelf',{bookId,shelf,body,rating});
}
 
  

}
