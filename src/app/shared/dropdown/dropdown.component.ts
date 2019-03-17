import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {
@Input() shelf: string;
shelfStatus: string = "Want to Read";
buttonStatus = false; 


  constructor() { }

  ngOnChanges() {
    this.shelfStatus = this.shelf? this.shelf : this.shelfStatus;
    this.buttonStatus = this.shelf? true : false;

  }

}
