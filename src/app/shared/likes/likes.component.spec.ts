import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LikesComponent } from './likes.component';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';
import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LikesService } from './likes.service';
import { listLikes } from 'src/app/classes/listLikes';

fdescribe('LikesComponent', () => {
  let component: LikesComponent;
  let fixture: ComponentFixture<LikesComponent>;
  let nullValue= null
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesComponent],
       providers:[LikesComponent, HttpClient, LikesService , listLikes , HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });
  fit('should be created', inject([LikesComponent], (com: LikesComponent) => {
    expect(com).toBeTruthy(); //component exists
  }));


})

