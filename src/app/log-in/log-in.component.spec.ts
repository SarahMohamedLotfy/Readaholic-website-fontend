
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogInHttpService } from './log-in-http.service';
import {  By } from '@angular/platform-browser';
import { FakeBackendInterceptor } from '../fake-backend';
import { user } from '../classes/user';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        
      ],
      providers:[LogInHttpService, FakeBackendInterceptor]
      
    });
    fixture=TestBed.createComponent(LogInComponent);
    component= fixture.componentInstance;
    component.ngOnInit();
    
  });

  it('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
    
});




});