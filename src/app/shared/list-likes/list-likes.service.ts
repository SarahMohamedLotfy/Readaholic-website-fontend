import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLikes } from 'src/app/classes/listLikes';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/classes/appconstant';

@Injectable({
  providedIn: 'root'
})
export class ListLikesService {
  url :string=AppConstants.baseURL;
  constructor(private http: HttpClient) { }

  /** get comments */
  getLikesList(id : number): Observable<listLikes[]> {
    return this.http.get<listLikes[]>(this.url+'/api/listLikes?id='+ id);
  }
}
