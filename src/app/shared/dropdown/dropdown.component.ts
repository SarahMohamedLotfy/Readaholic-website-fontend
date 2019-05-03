import { Component, Input, OnChanges, AfterViewChecked, Output, EventEmitter, OnInit, AfterContentInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { ShelfService } from './shelf.service';
import { SharedService } from 'src/app/shared.service';


/**used to add or remove a book from a shelf  */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {

  /**the input book id from the parent component */
  @Input() bookId: number;

  /**id of the shelf */
  shelfId: number;

  /**shelves array */
  shelves: string[] = ['Read', 'Currently Reading', 'Want To Read'];

  /** the displayed shelf */
  shelfStatus: string = this.shelves[2];

  /**@ignore */
  buttonDisabled: boolean = false;

  /**@ignore */
  removeEnabled: boolean = false;

  constructor(private service: ShelfService, private sharedService: SharedService) { }
  /** sets the displayed shelf
   *  if the user has the specified book on a certain shelf then it displayes the shelf name other wise it's set to its default value
   * 
   */
  ngOnChanges(changes: SimpleChanges) {

    this.sharedService.currentshelf.subscribe(data => {
      if (data.key != -1 && data.value != -1) {
        if (data.key == this.bookId) {
          this.shelfId = data.value;
          if (this.shelfId < 3) {
            this.shelfStatus = this.shelves[this.shelfId];
            this.buttonDisabled = true;
            this.removeEnabled = true;
          }
         /* else {
            this.shelfStatus = this.shelves[2];
            this.buttonDisabled = false;
            this.removeEnabled = false;
          }*/
        }
      }
    });

    if (changes['bookId'].currentValue != null) {
      this.service.getUserBookInfo(changes['bookId'].currentValue).subscribe((data) => {
        this.shelfId = data.pages[0].shelf_name;
        if (this.shelfId != 3) {
          this.shelfStatus = this.shelves[this.shelfId];
          this.sharedService.changeShelf(this.bookId, this.shelfId);
          this.buttonDisabled = true;
          this.removeEnabled = true;
        }
      });
    }
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
    this.service.removeFromShelf(this.shelfId, this.bookId).subscribe((data) => {
      console.log(data);
      this.shelfStatus = this.shelves[2];
      this.sharedService.changeShelf(this.bookId,3);
      this.buttonDisabled = false;
      this.removeEnabled = false;
      console.log("aaaaaaaa");
    })
  }


  /**adds a book to the selected shelf */
  addBookToShelf(eventObj: Event) {
    var e = <HTMLElement>eventObj.srcElement;
    this.shelfId = +e.id
    this.service.addToShelf(this.shelfId, this.bookId).subscribe((data) => {
      this.shelfStatus = this.shelves[this.shelfId]
      this.sharedService.changeShelf(this.bookId,this.shelfId);
      this.buttonDisabled = true;
      this.removeEnabled = true;
      console.log(data);
    })
  }


}
