import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

fdescribe('DropdownComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      imports:[NgbRatingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
