import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LikesComponent } from './likes.component';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';
import { Component } from '@angular/core';



describe('LikesComponent', () => {
  let component: LikesComponent;
  let fixture: ComponentFixture<LikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
   // expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });

})

