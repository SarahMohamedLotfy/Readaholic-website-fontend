import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLikes } from 'src/app/classes/listLikes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListLikesService {
  url="http://5cb4a97d.ngrok.io/api/";
  constructor(private http: HttpClient) { }

  /** get comments */
  getLikesList(id : number): Observable<listLikes[]> {
    return this.http.get<listLikes[]>(this.url+'listLikes?id='+ id);
  }
}
