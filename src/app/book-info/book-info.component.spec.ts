import { BookInfoComponent } from "./book-info.component";
import { BookService } from './book.service';
import { book } from '../classes/book';
import { Observable, from } from 'rxjs';
import { from as observableFrom } from 'rxjs';

fdescribe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let bookService: BookService;

  beforeEach(() => {
    bookService = new BookService(null);
    component = new BookInfoComponent(bookService,null,null,null,null);
  })

  fit('should be created', () => {
    expect(component).toBeTruthy();
  })

  fit('should render the book title', () => {
    const book: book = {
      "id": 3,
      "title": "once and future",
      "isbn": 555,
      "img_url": "https://images-na.ssl-images-amazon.com/images/I/51Jb2iLFuXL._SX329_BO1,204,203,200_.jpg",
      "publication_date": "2015",
      "publisher": "kkkll",
      "language": "english",
      "description": "Robin of Locksley is dead. Maid Marian doesn’t know how she’ll go on, but the people of Locksley town, persecuted by the Sheriff of Nottingham, need a protector. And the dreadful Guy of Gisborne, the Sheriff’s right hand, wishes to step into Robin’s shoes as Lord of Locksley and Marian’s fiancé. Who is there to stop them? Marian never meant to tread in Robin’s footsteps—never intended to stand as a beacon of hope to those awaiting his triumphant return. But with a sweep of his green cloak and the flash of her sword, Marian makes the choice to become her own hero: Robin Hood.",
      "reviews_count": 55,
      "ratings_count": 63,
      "ratings_avg": 3,
      "author_id": 3,
      "author_name": "Meagan Spooner",
      "pages_no": 100,
      "created_at": "2010",
      "updated_at": "2010",
      "genre": "action"
    }
    
    spyOn(bookService, 'getBook').and.callFake(() => {
      return Observable.from
    });
    component.ngOnInit()

  })
  

});