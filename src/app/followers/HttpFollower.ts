import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpFollower {
  url = 'http://localhost:3000';

  constructor(private http:HttpClient) {}
  
    getfollowers(){
      return this.http.get('https://my-json-server.typicode.com/SarahMohamedAhmed/followinggg/following');
      
       }
       getUserprofile(id: number): Observable<any> {
        return this.http.get<any> (this.url + `/profile/${id}`);
      }
     
}
