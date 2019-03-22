import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class HttpFollowing {
  url = 'http://localhost:3000';

  constructor(private http:HttpClient) {}
  
  

  getfollowing(){
    return this.http.get('http://my-json-server.typicode.com/SarahMohamedLotfy/followlast/following');
    
  }
  getUserprofile(id: number): Observable<any> {
    return this.http.get<any> (this.url + `/profile/${id}`);
  }
  
     
}
