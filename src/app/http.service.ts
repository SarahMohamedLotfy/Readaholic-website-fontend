import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}
   
  getdata(){
return this.http.get('http://localhost:3000/author').subscribe(data =>
console.log("wegot",data));
  }
 getreviews():Observable<any>{
return this.http.get('http://localhost:3000/author');

 }
 getBooks():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
  
   }
}
