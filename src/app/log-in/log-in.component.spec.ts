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

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;

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
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    fit('should create component', () => {
      expect(component instanceof LogInComponent).toBe(true);//This is working fine
  });

fit('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();

});

fit('login button clicked',async(()=>{


        spyOn(component, 'onSubmit');

        let bt= fixture.debugElement.query(By.css('button#signInButton'));
          bt.triggerEventHandler('click',null);


         fixture.detectChanges();
          expect(component.onSubmit).toHaveBeenCalled();

}));

fit('sign up button clicked',async(()=>{


          spyOn(component, 'onSigUp');

          let bt= fixture.debugElement.query(By.css('button#signUpButton'));
            bt.triggerEventHandler('click',null);


           fixture.detectChanges();
            expect(component.onSigUp).toHaveBeenCalled();

  }));

  it('sign in service called',async(()=>{
      let loginElement: DebugElement;
           let debugElement = fixture.debugElement;
            let authService = debugElement.injector.get(LogInHttpService);
            let loginSpy = spyOn(authService, 'login').and.callThrough();
            loginElement = fixture.debugElement.query(By.css('button#signInButton'));
            component.form.controls['email'].setValue('user@ya.com');
           component.form.controls['password'].setValue('123456');
            loginElement.triggerEventHandler('click', null);
            expect(loginSpy).toHaveBeenCalledTimes(1);

    }));

    fit('login form invalid when email not in the right form', ()=>{

      component.form.controls['email'].setValue('user');
           component.form.controls['password'].setValue('123456');
      expect(component.form.valid).toBeFalsy();

  });
  fit('login form invalid when password less than 6 chars', ()=>{
    let loginElement: DebugElement;
           let debugElement = fixture.debugElement;
           loginElement = fixture.debugElement.query(By.css('button#signInButton'));

    component.form.controls['email'].setValue('user@yah.co');
         component.form.controls['password'].setValue('1234');
    expect(component.form.valid).toBeFalsy();
    expect(component.form.controls['password'].valid).toBeFalsy();
    expect(component.form.controls['email'].valid).toBeTruthy();
     let authService = debugElement.injector.get(LogInHttpService);
     let loginSpy = spyOn(authService, 'login').and.callThrough();
     loginElement = fixture.debugElement.query(By.css('button#signInButton'));

     loginElement.triggerEventHandler('click', null);
     expect(loginSpy).toHaveBeenCalledTimes(0);
});

fit('should show error messages when login input is invalid', async(() => {


  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  const input = component.form.controls['email'];
  input.setValue('test')
  input.markAsTouched();
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    const messages = compiled.querySelector('#error');
    expect(messages).toBeTruthy();
  })}));

fit('signup form invalid when password less than 6 chars', ()=>{


  component.formUp.controls['email'].setValue('user@yah.co');
component.formUp.controls['password'].setValue('1234');

  expect(component.formUp.valid).toBeFalsy();
  expect(component.formUp.controls['password'].valid).toBeFalsy();
  expect(component.formUp.controls['email'].valid).toBeTruthy();
});

fit('signup form invalid when name less than 3 chars', ()=>{
  let loginElement: DebugElement;
  let debugElement = fixture.debugElement;
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  const compiled = fixture.debugElement.nativeElement;
  component.formUp.controls['email'].setValue('user@yah.co');
component.formUp.controls['password'].setValue('123456');
component.formUp.controls['password_confirmation'].setValue('123456');
component.formUp.controls['name'].setValue('av');
component.formUp.controls['gender'].setValue('female');
component.formUp.controls['country'].setValue('egypt');
component.formUp.controls['city'].setValue('cairo');

  expect(component.formUp.valid).toBeFalsy();
  expect(component.formUp.controls['password'].valid).toBeTruthy();
  expect(component.formUp.controls['email'].valid).toBeTruthy();
  expect(component.formUp.controls['name'].valid).toBeFalsy();
  component.formUp.controls['name'].markAsTouched();
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    const messages = compiled.querySelector('#error');
    expect(messages).toBeTruthy();
  })

  let authService = debugElement.injector.get(LogInHttpService);
  let loginSpy = spyOn(authService, 'signUp').and.callThrough();
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  loginElement.triggerEventHandler('click', null);
  expect(loginSpy).toHaveBeenCalledTimes(0);

});

fit('if in signup password mismatch service wont be called', ()=>{

  let loginElement: DebugElement;
  let debugElement = fixture.debugElement;
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  const compiled = fixture.debugElement.nativeElement;
  component.formUp.controls['email'].setValue('user@yah.co');
component.formUp.controls['password'].setValue('123456');
component.formUp.controls['password_confirmation'].setValue('12345678');
component.formUp.controls['name'].setValue('ava');
component.formUp.controls['gender'].setValue('female');
component.formUp.controls['country'].setValue('egypt');
component.formUp.controls['city'].setValue('cairo');
component.formUp.controls['birthday'].setValue('5/5/1997');
  expect(component.formUp.valid).toBeTruthy();
  component.formUp.markAsTouched();
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    const messages = compiled.querySelector('#errorUp');
    expect(messages).toBeTruthy();
  })
  let authService = debugElement.injector.get(LogInHttpService);
  let loginSpy = spyOn(authService, 'signUp').and.callThrough();
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  loginElement.triggerEventHandler('click', null);
  expect(loginSpy).toHaveBeenCalledTimes(0);

});



fit('if signup form valid call service', ()=>{

  let loginElement: DebugElement;
  let debugElement = fixture.debugElement;
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  const compiled = fixture.debugElement.nativeElement;
  component.formUp.controls['email'].setValue('user@yah.co');
component.formUp.controls['password'].setValue('123456');
component.formUp.controls['password_confirmation'].setValue('123456');
component.formUp.controls['name'].setValue('ava');
component.formUp.controls['gender'].setValue('female');
component.formUp.controls['country'].setValue('egypt');
component.formUp.controls['city'].setValue('cairo');
component.formUp.controls['birthday'].setValue('5/5/1997');
  expect(component.formUp.valid).toBeTruthy();
  component.formUp.markAsTouched();
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    const messages = compiled.querySelector('#error');
    expect(messages).toBeFalsy();
  })
  let authService = debugElement.injector.get(LogInHttpService);
  let loginSpy = spyOn(authService, 'signUp').and.callThrough();
  loginElement = fixture.debugElement.query(By.css('button#signUpButton'));

  loginElement.triggerEventHandler('click', null);
  expect(loginSpy).toHaveBeenCalledTimes(1);

});


fit('forgot pass form valid call service',async(()=>{

  let loginElement: DebugElement;
  let debugElement = fixture.debugElement;
  loginElement = fixture.debugElement.query(By.css('button#resetButton'));


  let bt= fixture.debugElement.query(By.css('button#forgotButton'));
    bt.triggerEventHandler('click',null);
    component.formReset.controls['email'].setValue('user@yah.co');
    expect(component.formReset.valid).toBeTruthy();
    let authService = debugElement.injector.get(LogInHttpService);
    let loginSpy = spyOn(authService, 'resetPass').and.callThrough();


    loginElement.triggerEventHandler('click', null);
    expect(loginSpy).toHaveBeenCalledTimes(1);

}));

fit('forgot pass form invalid ',async(()=>{

  let loginElement: DebugElement;
  let debugElement = fixture.debugElement;
  loginElement = fixture.debugElement.query(By.css('button#resetButton'));


  let bt= fixture.debugElement.query(By.css('button#forgotButton'));
    bt.triggerEventHandler('click',null);
    component.formReset.controls['email'].setValue('user');
    expect(component.formReset.valid).toBeFalsy();
    let authService = debugElement.injector.get(LogInHttpService);
    let loginSpy = spyOn(authService, 'resetPass').and.callThrough();


    loginElement.triggerEventHandler('click', null);
    expect(loginSpy).toHaveBeenCalledTimes(0);

}));









});
