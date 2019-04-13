import { Component, Input, OnChanges, AfterViewChecked, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {
/**the input shelf id from the parent component */ 
@Input() shelfId: number;

/**the input book id from the parent component */
@Input() bookId: number;

/**shelves array */
shelves: string[] = ["Read", "Currently Reading", "Want To Read"];

/** the displayed shelf */
shelfStatus: string = this.shelves[2];

/**event emitter  */ //fakre feha
@Output() shelfSelected: EventEmitter<string> = new EventEmitter<string>();
/**@ignore */
buttonDisabled: boolean = false; 

/**@ignore */
removeEnabled: boolean = false;


  constructor() { }
/** sets the displayed shelf
 *  if the user has the specified book on a certain shelf then it displayes the shelf name other wise it's set to its default value
 * 
 */
ngOnChanges() {
    if(this.shelfId != null && this.shelfId != 3)
    {
      this.shelfStatus = this.shelves[this.shelfId];
      this.buttonDisabled = true;
      this.removeEnabled = true;
    }
  }

  /**changes the state of the remove button on hover */
  mouseEnter(eventObj: Event){
    var e = <HTMLElement> eventObj.srcElement;
    e.innerHTML = "&#10008; "
  }

  /**changes the state of the remove button on leave */
  mouseLeave(eventObj: Event){
    var e = <HTMLElement> eventObj.srcElement;
    e.innerHTML = "&#10003; "
  }

 /*
  removeBookFromShelf() {
    this.service.removeFromShelf(this.shelfId,this.bookId).subscribe(() => {
      this.shelfStatus = this.shelves[2];
      this.buttonDisabled = false;
      this.removeEnabled = false;
    })
  }


  addBookToShelf(eventObj: Event) {
   var e = <HTMLElement> eventObj.srcElement;
    this.shelfId = +e.id
    this.service.addToShelf(this.shelfId,this.bookId).subscribe( ()=> {
      this.shelfStatus = this.shelves[this.shelfId];
      this.buttonDisabled = true;
      this.removeEnabled = true;

    })
  }*/


}
