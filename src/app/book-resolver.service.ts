import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { book } from './classes/book';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class BookResolverService implements Resolve<book>{

  constructor(private http: HttpService){}

  resolve(route: ActivatedRouteSnapshot): Observable<book> {
   const id = +route.paramMap.get('id');
   return this.http.getBook(id);
  
  }
  
  
  

 
}
