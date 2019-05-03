import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private shelfSource = new BehaviorSubject({key:-1, value:-1});
  currentshelf = this.shelfSource.asObservable();

  constructor() { }

  changeShelf(key:number, val: number) {
    this.shelfSource.next({key: key, value: val})
  }
}