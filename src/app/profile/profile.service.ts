import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient ) { }

  url = 'http://localhost:3000';

  getUserprofile(id: number): Observable<any> {
    return this.http.get<any> (this.url +"/profile/"+ id );
  }

  getfollowing(): Observable<any> {
    return this.http.get<any>('http://my-json-server.typicode.com/SarahMohamedLotfy/followlast/following');
  }

}
