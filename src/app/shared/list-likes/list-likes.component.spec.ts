import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLikesComponent } from './list-likes.component';

describe('ListLikesComponent', () => {
  let component: ListLikesComponent;
  let fixture: ComponentFixture<ListLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
