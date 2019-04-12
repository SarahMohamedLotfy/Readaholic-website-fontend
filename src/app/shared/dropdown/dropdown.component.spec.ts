import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DropdownComponent } from './dropdown.component';

describe('dropdown component', () => {
    let fixture: ComponentFixture<DropdownComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownComponent]
        });
        fixture = TestBed.createComponent(DropdownComponent);
    })

    it('should have the correct book id', () => {
        fixture.componentInstance.bookId = 150;

        expect(fixture.componentInstance.bookId).toEqual(150);
    })
})