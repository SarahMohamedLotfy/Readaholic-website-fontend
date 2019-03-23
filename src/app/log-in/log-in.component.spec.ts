




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

  it('should call  login method', async(()=>{
    let loginElement: DebugElement;
    const debugElement= fixture.debugElement;
    let authService= debugElement.injector.get(LogInHttpService);
    let loginSpy= spyOn(authService,'login').and.callThrough();
    loginElement= fixture.debugElement.query(By.css('form'));

    component.form.controls['email'].setValue('user');
    component.form.controls['password'].setValue('123');
    loginElement.triggerEventHandler('click',null);
    expect(loginSpy).toHaveBeenCalledTimes(1);

  }))
});