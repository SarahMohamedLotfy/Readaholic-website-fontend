import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {
@Input() shelf: string;
shelfStatus: string = "Want to Read";
buttonStatus: boolean = false; 


  constructor() { }

  ngOnChanges() {
    if(this.shelf)
    {
      this.shelfStatus = this.shelf;
      this.buttonStatus = true;
    }
  }

}
