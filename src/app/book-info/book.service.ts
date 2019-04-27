import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userBookInfo } from '../classes/userBookInfo';

/**handles book related http requests */
@Injectable({
  providedIn: 'root'
})

export class BookService {
/**@param {HttpClient} http to handle http requests get,post etc */
  constructor(private http:HttpClient) { }

  /**
   * gets the selected book information by id
   * @param {number} id the book id
   * @returns the book of the passed id
   */
  getBook(id: number): Observable<any> {
   // return this.http.get<any>('http://localhost:3000/book/'+id);
    //let params = new HttpParams({ fromObject: { book_id:id} });
    return this.http.get('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/books/show?book_id='+id);
 }

 /**
  * gets the reviews of the book
  * @param {number} id the book id
  * @returns the reviews array of the selected book
  */
 getBookReviews(id: number): Observable<any> {
  //let params = new HttpParams().set("bookId",id);
  return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/showReviewsForABook?bookId='+id);
  // return this.http.get<review[]>("http://localhost:3000/review");
 }

 

/**
 * create book review
 * @param {number} bookId id of the reviewd book
 * @param {number} shelf the id of the shelf
 * @param {string} body the body of the review
 * @param {number rating the user rating of the book}
 *  */
createReview(bookId:number, shelf: number, body: string, rating: number): Observable<any> {
  if(body == "")
  {
    return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/reviwes/create',{bookId,shelf,rating});
  }
  else
  {
    return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/reviwes/create',{bookId,shelf,body,rating});
  }

   // return this.http.post('http://localhost:3000/ReadShelf',{bookId,shelf,body,rating});
}


}
