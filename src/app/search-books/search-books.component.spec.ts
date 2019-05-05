import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksComponent } from './search-books.component';

import { NO_ERRORS_SCHEMA, DebugElement }from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SearchBooksService } from './search-books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
fdescribe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        
      ],
      providers:[SearchBooksService],
      schemas:      [ NO_ERRORS_SCHEMA ],
    })
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
   component.ngOnInit();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call search by title ', () => {
    let searchElement: DebugElement;
    let debugElement = fixture.debugElement;
    searchElement = fixture.debugElement.query(By.css('button#searchButton'));
    component.form.controls['searchBox'].setValue('dkdf');
    component.form.controls['searchType'].setValue('tiltle');
    let authService = debugElement.injector.get(SearchBooksService);
    let titleSpy = spyOn(authService, 'getBookByTitle').and.callThrough();
     let genreSpy = spyOn(authService, 'getBookByGenre').and.callThrough();
searchElement.triggerEventHandler('click',null);
expect(titleSpy).toHaveBeenCalled();
expect(genreSpy).toHaveBeenCalledTimes(0);


  });
  
  fit('should call search by author ', () => {
    let searchElement: DebugElement;
    let debugElement = fixture.debugElement;
    searchElement = fixture.debugElement.query(By.css('button#searchButton'));
    component.form.controls['searchBox'].setValue('dkdf');
    component.form.controls['searchType'].setValue('author');
    let authService = debugElement.injector.get(SearchBooksService);
    let authorSpy = spyOn(authService, 'getBookByAuthor').and.callThrough();
     let genreSpy = spyOn(authService, 'getBookByGenre').and.callThrough();
searchElement.triggerEventHandler('click',null);
expect(authorSpy).toHaveBeenCalled();
expect(genreSpy).toHaveBeenCalledTimes(0);


  });
  
  
  
  fit('should call search by ISBN ', () => {
    let searchElement: DebugElement;
    let debugElement = fixture.debugElement;
    searchElement = fixture.debugElement.query(By.css('button#searchButton'));
    component.form.controls['searchBox'].setValue('dkdf');
    component.form.controls['searchType'].setValue('ISBN');
    let authService = debugElement.injector.get(SearchBooksService);
    let IsbnSpy = spyOn(authService, 'getBookByIsbn').and.callThrough();
     let genreSpy = spyOn(authService, 'getBookByGenre').and.callThrough();
searchElement.triggerEventHandler('click',null);
expect(IsbnSpy).toHaveBeenCalled();
expect(genreSpy).toHaveBeenCalledTimes(0);


  });

  fit('should call search by genre ', () => {
    let searchElement: DebugElement;
    let debugElement = fixture.debugElement;
    searchElement = fixture.debugElement.query(By.css('button#searchButton'));
    component.form.controls['searchBox'].setValue('dkdf');
    component.form.controls['searchType'].setValue('genre');
    let authService = debugElement.injector.get(SearchBooksService);
    let IsbnSpy = spyOn(authService, 'getBookByIsbn').and.callThrough();
     let genreSpy = spyOn(authService, 'getBookByGenre').and.callThrough();
searchElement.triggerEventHandler('click',null);
expect(IsbnSpy).toHaveBeenCalledTimes(0);
expect(genreSpy).toHaveBeenCalledTimes(1);


  });
});
