import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
 @Input() starsCount: number;
 @Input() readOnly: boolean;
 @Output() rate:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.rate.emit(this.starsCount);
  }
}
