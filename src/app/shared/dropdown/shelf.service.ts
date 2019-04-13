import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**@ignore */
@Injectable({
  providedIn: 'root'
})

export class ShelfService {
    constructor(private http:HttpClient) { }

    removeFromShelf(shelfId:number, bookId: number):Observable<void> {
        return this.http.delete<void>('http://a6df2b7f.ngrok.io/ReadShelf/'+ bookId) ;

    }

    addToShelf(shelfId:number, id: number):Observable<any> {
      return this.http.post<any>('http://a6df2b7f.ngrok.io/ReadShelf',{id}) ;
    }
    
}