import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SharedService {

  private shelfSource = new BehaviorSubject({key:-1, value:-1});
  currentShelf = this.shelfSource.asObservable();

  constructor() { }
  
  changeShelf(key:number, val: number) {
    this.shelfSource.next({key: key, value: val})
  }
}