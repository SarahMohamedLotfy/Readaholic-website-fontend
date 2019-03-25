import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { HttpClient } from '@angular/common/http';
import { userBookInfo } from '../classes/userBookInfo';

@Injectable({
  providedIn: 'root'
})
/**handles book related http requests */
export class BookService {

  constructor(private http:HttpClient) { }

  /**gets the selected book information by id */
  getBook(id: number): Observable<book> {
    return this.http.get<book>("http://localhost:3000/book/" + id);
 }

 /**gets the reviews of the book */
 getBookReviews(): Observable<review[]> {
   return this.http.get<review[]>("http://localhost:3000/review");
 }

 /** gets user related book info */
 getUserBookInfo(): Observable<userBookInfo> {
  return this.http.get<userBookInfo>('http://localhost:3000/userBookInfo/1');
}

}