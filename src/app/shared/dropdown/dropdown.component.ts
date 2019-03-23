import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
 /**stores the input shelf */ 
@Input() shelf: string;
/**shelf name to be displayed */
shelfStatus: string = "Want to Read";
/**@ignore */
buttonDisabled: boolean = false; 


  constructor() { }
/** sets the displayed shelf
 *  if the user has the specified book on a certain shelf then it displayes the shelf name other wise it's set to its default value
 * 
 */
  ngOnInit() {
    if(this.shelf)
    {
      this.shelfStatus = this.shelf;
      this.buttonDisabled = true;
    }
  }

}
