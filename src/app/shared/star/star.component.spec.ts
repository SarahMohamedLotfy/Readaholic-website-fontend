import { StarComponent } from "./star.component";
import { BookService } from 'src/app/book-info/book.service';

import { TestBed, ComponentFixture } from "@angular/core/testing";
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { HomeComponent } from 'src/app/home/home.component';
import {MyBooksComponent } from 'src/app/my-books/my-books.component'

describe("star component", () => {
    let fixture: ComponentFixture<StarComponent>;
    let mockService;

    beforeEach(() => {
      mockService = jasmine.createSpyObj(['createReview']);
        TestBed.configureTestingModule({
            declarations: [StarComponent],
            providers: [{ provide: BookService,HomeComponent, useValue: mockService }],
            schemas: [ NO_ERRORS_SCHEMA  ]
        });
        fixture = TestBed.createComponent(StarComponent);
    })

    it('should be able to rate a book if rating made activated', () => {
      mockService.createReview.and.returnValue(of(true));
      fixture.componentInstance.readOnly = false;

      fixture.componentInstance.onClick();

      expect(mockService.createReview).toHaveBeenCalled();
    })
});
