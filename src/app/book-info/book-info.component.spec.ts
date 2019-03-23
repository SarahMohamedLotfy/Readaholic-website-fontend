import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoComponent } from './book-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service';

describe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let fixture: ComponentFixture<BookInfoComponent>;
  let mockActivatedRoute,mockBookService,mockRouter;


  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockBookService = jasmine.createSpyObj(['getBook','getBookReviews','getUserBookInfo']);
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => { return '155;'}}}
    }
    TestBed.configureTestingModule({
      declarations: [ BookInfoComponent ],
      providers: [
       {provide: ActivatedRoute, USE_VALUE: mockActivatedRoute},
       {provide: BookService, USE_VALUE: mockBookService},
       {provide: Router, USE_VALUE: mockRouter}
      ]
    })
    fixture = TestBed.createComponent(BookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.myBook =  mockBookService.getBook(155);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.myBook.id).toEqual(155);
  });
});
