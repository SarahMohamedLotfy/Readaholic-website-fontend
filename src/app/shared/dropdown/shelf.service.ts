import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**@ignore */
@Injectable({
  providedIn: 'root'
})

export class ShelfService {

    constructor(private http:HttpClient) { }

    url = 'http://a6df2b7f.ngrok.io/api/shelf/';

    /**
     * removes book from its shelf
     * @param shelfId {number}  id of the shelf where the book is stored
     * @param bookId {number} id of the selected book
     */
    removeFromShelf(shelfId:number, bookId: number):Observable<void> {
        return this.http.delete<void>(this.url + 'remove_book?shelf_id='+ shelfId + '&book_id=' + bookId) ;

    }

    /**
     * adds book to shelf
     * @param shelf_id {number} id of the shelf
     * @param book_id  {number} id of the selected book
     */
    addToShelf(shelf_id:number, book_id: number):Observable<any> {
      return this.http.post<any>(this.url + 'add_book',{shelf_id,book_id}) ;
    }

}
