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
/**constructor of book service */
  constructor(private http:HttpClient) { }

  /**gets the selected book information by id */
  getBook(id: number): Observable<any> {
  //  return this.http.get<book>('http://localhost:3000/book/'+id);
    //let params = new HttpParams({ fromObject: { book_id:id} });
    return this.http.get('http://972c6e5d.ngrok.io/api/books/show?book_id='+id);
 }

 /**gets the reviews of the book */
 getBookReviews(id: number): Observable<any> {
  //let params = new HttpParams().set("bookId",id);
  return this.http.get<any>('http://972c6e5d.ngrok.io/api/showReviewsForABook?bookId='+id);
  // return this.http.get<review[]>("http://localhost:3000/review");
 }

 /** gets user related book info */
 getUserBookInfo(id: number): Observable<any> {
  return this.http.get<userBookInfo>('http://972c6e5d.ngrok.io/api/showReviewForBookForUser?bookId='+id);
}

/**create book review */
createReview(bookId:number, shelf: number, body: string, rating: number): Observable<any> {
  if(body == "")
  {
    return this.http.post('http://972c6e5d.ngrok.io/api/reviwes/create',{bookId,shelf,rating});
  }
  else
  {
    return this.http.post('http://972c6e5d.ngrok.io/api/reviwes/create',{bookId,shelf,body,rating});
  }
  
   // return this.http.post('http://localhost:3000/ReadShelf',{bookId,shelf,body,rating});
}


}
