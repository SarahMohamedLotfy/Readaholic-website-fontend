import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**Handles About Us page Service*/

@Injectable({
  providedIn: 'root'
})
export class aboutusService {
/**
 * Constructor for httpAboutus service . 
 
*/
  constructor(private http:HttpClient) { }

  getImg(){
    return this.http.get('http://localhost:3000/AboutUs');
  
  }
 
    
}
