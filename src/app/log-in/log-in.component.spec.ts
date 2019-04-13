
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { LogInHttpService } from './log-in-http.service';
import {  By } from '@angular/platform-browser';
import { FakeBackendInterceptor } from '../fake-backend';
import { user } from '../classes/user';
import { of } from 'rxjs/internal/observable/of';

fdescribe('LogInComponent', () => {
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
      providers: [LogInHttpService],
      
    });
      fixture = TestBed.createComponent(LogInComponent);
      component = fixture.componentInstance;
     component.ngOnInit();

    })
  
    
  

fit('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
    
});

fit('login button clicked',fakeAsync(()=>{


        spyOn(component, 'onSubmit');

        let bt= fixture.debugElement.query(By.css('button#signInButton'));
          bt.triggerEventHandler('click',null);
      
        tick(); // simulates the passage of time until all pending asynchronous activities finish
         fixture.detectChanges();
          expect(component.onSubmit).toHaveBeenCalled();
 
}));

fit('sign up button clicked',fakeAsync(()=>{
  
  
          spyOn(component, 'onSigUp');
  
          let bt= fixture.debugElement.query(By.css('button#signUpButton'));
            bt.triggerEventHandler('click',null);
        
          tick(); // simulates the passage of time until all pending asynchronous activities finish
           fixture.detectChanges();
            expect(component.onSigUp).toHaveBeenCalled();
   
  }));

  fit('sign in service called',async(()=>{
      let loginElement: DebugElement;
           let debugElement = fixture.debugElement;
            let authService = debugElement.injector.get(LogInHttpService);
            let loginSpy = spyOn(authService, 'login').and.callThrough();
            loginElement = fixture.debugElement.query(By.css('button#signInButton'));
            component.form.controls['email'].setValue('user');
           component.form.controls['password'].setValue('123');
            loginElement.triggerEventHandler('click', null);
            expect(loginSpy).toHaveBeenCalledTimes(1);
     
    }));

    fit('sign up service called',async(()=>{
      let loginElement: DebugElement;
           let debugElement = fixture.debugElement;
            let authService = debugElement.injector.get(LogInHttpService);
            let loginSpy = spyOn(authService, 'signUp').and.callThrough();
            loginElement = fixture.debugElement.query(By.css('button#signUpButton'));
            
            loginElement.triggerEventHandler('click', null);
            expect(loginSpy).toHaveBeenCalledTimes(1);
     
    }));
  




});

