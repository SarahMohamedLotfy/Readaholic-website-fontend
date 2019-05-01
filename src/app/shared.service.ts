import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private shelfSource = new BehaviorSubject(4);
  currentshelf = this.shelfSource.asObservable();

  constructor() { }

  changeShelf(message: number) {
    this.shelfSource.next(message)
  }

}