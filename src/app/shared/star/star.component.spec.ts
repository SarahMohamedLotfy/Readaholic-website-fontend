import { StarComponent } from "./star.component";
import { BookService } from 'src/app/book-info/book.service';

import { TestBed, ComponentFixture } from "@angular/core/testing";
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';


fdescribe("star component", () => {
    let fixture: ComponentFixture<StarComponent>;
    let mockService;

    beforeEach(() => {
      mockService = jasmine.createSpyObj(['createReview']);
        TestBed.configureTestingModule({
            declarations: [StarComponent],
            providers: [{ provide: BookService, useValue: mockService }],
            schemas: [ NO_ERRORS_SCHEMA  ]
        });
        fixture = TestBed.createComponent(StarComponent);
    })

    fit('should be able to rate a book if rating made activated', () => {
      mockService.createReview.and.returnValue(of(true));
      fixture.componentInstance.readOnly = false;

      fixture.componentInstance.onClick();

      expect(mockService.createReview).toHaveBeenCalled();
    })
})
