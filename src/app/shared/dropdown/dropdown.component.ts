import { Component, Input, OnChanges, AfterViewChecked, Output, EventEmitter, OnInit } from '@angular/core';
import { ShelfService } from './shelf.service';

/**used to add or remove a book from a shelf  */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  /**the input book id from the parent component */
  @Input() bookId: number;

  /**id of the shelf */
  shelfId: number;

  /**shelves array */
  shelves: string[] = ["Read", "Currently Reading", "Want To Read"];

  /** the displayed shelf */
  shelfStatus: string = this.shelves[2];

  /**@ignore */
  buttonDisabled: boolean = false;

  /**@ignore */
  removeEnabled: boolean = false;


  constructor(private service: ShelfService) { }
  /** sets the displayed shelf
   *  if the user has the specified book on a certain shelf then it displayes the shelf name other wise it's set to its default value
   * 
   */
  ngOnInit() {
    this.service.getUserBookInfo(this.bookId).subscribe((data) => {
      if (data.shelf_name != 3) {
        this.shelfId = data.shelf_name ;
        this.shelfStatus = this.shelves[this.shelfId];
        this.buttonDisabled = true;
        this.removeEnabled = true;
      }
    });
  }

  /**changes the state of the remove button on hover
   * @param {Event} eventObj
   */
  mouseEnter(eventObj: Event) {
    var e = <HTMLElement>eventObj.srcElement;
    e.innerHTML = "&#10008; "
  }

  /**changes the state of the remove button on leave
   * @param {Event} eventObj
   */
  mouseLeave(eventObj: Event) {
    var e = <HTMLElement>eventObj.srcElement;
    e.innerHTML = "&#10003; "
  }

  /**removes a book from its shelf */
  removeBookFromShelf() {
    this.service.removeFromShelf(this.shelfId, this.bookId).subscribe(() => {
      this.shelfStatus = this.shelves[2];
      this.buttonDisabled = false;
      this.removeEnabled = false;
    })
  }


  /**adds a book to the selected shelf */
  addBookToShelf(eventObj: Event) {
    var e = <HTMLElement>eventObj.srcElement;
    this.shelfId = +e.id
    this.service.addToShelf(this.shelfId, this.bookId).subscribe(() => {
      this.shelfStatus = this.shelves[this.shelfId];
      this.buttonDisabled = true;
      this.removeEnabled = true;

    })
  }


}
