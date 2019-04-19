import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ShelfService {
    constructor(private http:HttpClient) { }

    removeFromShelf(shelfId:number, bookId: number):Observable<void> {
        return this.http.delete<void>('http://ec2-3-87-221-152.compute-1.amazonaws.com/api/ReadShelf/'+ bookId) ;

    }

    addToShelf(shelfId:number, id: number):Observable<any> {
      return this.http.post<any>('http://ec2-3-87-221-152.compute-1.amazonaws.com/api/ReadShelf',{id}) ;
    }
    
}