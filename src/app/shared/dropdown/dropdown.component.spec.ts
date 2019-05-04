import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DropdownComponent } from './dropdown.component';
import { ShelfService } from './shelf.service';
import { SharedService } from 'src/app/shared.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('dropdown component', () => {
    let fixture: ComponentFixture<DropdownComponent>;
    let mockShelfService;

    mockShelfService = jasmine.createSpyObj(['getShelf', 'removeFromShelf', 'addToShelf']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownComponent],
            providers: [
                { provide: ShelfService, useValue: mockShelfService},
                SharedService
            ]
        });

        mockShelfService.getShelf.and.returnValue(of({ShelfName:0}));

        mockShelfService.removeFromShelf.and.returnValue(of(true));

        mockShelfService.addToShelf.and.returnValue(of(true));

        fixture = TestBed.createComponent(DropdownComponent);
    })

    fit(('should be created'), () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

    fit('should remove shelf', () => {
        fixture.componentInstance.bookId = 1;
        fixture.componentInstance.getShelfId();
        fixture.detectChanges();

        let btn= fixture.debugElement.query(By.css('#removebtn'));
        btn.triggerEventHandler('click',null);

        expect(mockShelfService.removeFromShelf).toHaveBeenCalledWith(0,1);
    });

    fit('should render the shelf name', () => {
        fixture.componentInstance.bookId = 1;
        fixture.componentInstance.getShelfId();
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('#test'));
        const element: HTMLElement = de.nativeElement;

        expect(element.textContent).toContain("Read");
    });

    fit('should add book to want to read shelf', () => {
        fixture.componentInstance.bookId = 1;
        fixture.componentInstance.getShelfId();

        let bt= fixture.debugElement.query(By.css('#want'));
        bt.triggerEventHandler('click',null);
        
        expect(mockShelfService.addToShelf).toHaveBeenCalledWith(2,1)
    });

    fit('should disable button after adding book to shelf', () => {
        fixture.componentInstance.bookId = 1;
        fixture.componentInstance.getShelfId();

        let bt= fixture.debugElement.query(By.css('#want'));
        bt.triggerEventHandler('click',null);

        expect(fixture.componentInstance.buttonDisabled).toEqual(true);
    });
})
