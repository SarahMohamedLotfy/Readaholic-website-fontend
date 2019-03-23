import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { HttpClient } from '@angular/common/http';
import { userBookInfo } from '../classes/userBookInfo';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBook(id: number): Observable<book> {
    return this.http.get<book>("http://localhost:3000/book/" + id);
 }

 getBookReviews(): Observable<review[]> {
   return this.http.get<review[]>("http://localhost:3000/review");
 }

 getUserBookInfo(): Observable<userBookInfo> {
  return this.http.get<userBookInfo>('http://localhost:3000/userBookInfo/1');
}

}
