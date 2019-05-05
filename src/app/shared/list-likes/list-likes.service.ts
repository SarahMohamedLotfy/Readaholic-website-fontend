import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLikes } from 'src/app/classes/listLikes';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/classes/appconstant';

@Injectable({
  providedIn: 'root'
})
export class ListLikesService {
  /** url of server */
  url :string=AppConstants.baseURL;
  /** constructor used to initialize httpClient object */
  constructor(private http: HttpClient) { }

  /** get Likes list */
  getLikesList(id : number):Observable<any> {
    return this.http.get<any>(this.url+'/api/listLikes?id='+ id);
  }
}
