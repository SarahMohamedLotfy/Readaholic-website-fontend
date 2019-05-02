import { AppConstants } from './../../classes/appconstant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**@ignore */
@Injectable({
  providedIn: 'root'
})

export class ShelfService {

  constructor(private http: HttpClient) { }
  /**url */
  url: string = AppConstants.baseURL;

  /**
   * removes book from its shelf
   * @param shelfId {number}  id of the shelf where the book is stored
   * @param bookId {number} id of the selected book
   */
  removeFromShelf(shelfId: number, bookId: number): Observable<any> {
    return this.http.delete<any>(this.url + '/api/shelf/remove_book?shelf_id=' + shelfId + '&book_id=' + bookId);
  }

  /**
   * adds book to shelf
   * @param shelf_id {number} id of the shelf
   * @param book_id  {number} id of the selected book
   */
  addToShelf(shelf_id: number, book_id: number): Observable<any> {
    return this.http.post<any>(this.url +'/api/shelf/add_book', { shelf_id, book_id });
  }

  /**
* gets user related book info
* @param {number} id the book id
* @returs user ralated book info
* @example when we pass the book id the function tells us if the user has this book on any of his shelves, if he rated it or posted a review
*  */
  getUserBookInfo(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/api/showReviewForBookForUser?bookId=' + id);
  }

}
