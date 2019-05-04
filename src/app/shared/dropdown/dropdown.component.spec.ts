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

    it('should disable button if there is an input shelf', () => {
        fixture.componentInstance.shelfId = 2;
        //fixture.componentInstance.ngOnChanges();

        expect(fixture.componentInstance.buttonDisabled).toBe(true);
    });

    it('should render the shelf name', () => {
        fixture.componentInstance.shelfId = 3;
        fixture.detectChanges();
        expect(document.getElementById("test").innerText).toContain("Want To Read");


      // expect(fixture.componentInstance.shelfStatus).toContain("Currently Reading");
    });




})
