import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsComponent } from './account-settings.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { AccountSettingsService } from './account-settings.service';

import { NO_ERRORS_SCHEMA }from '@angular/core';

fdescribe('AccountSettingsComponent', () => {
  let component: AccountSettingsComponent;
  let fixture: ComponentFixture<AccountSettingsComponent>;
  let de:DebugElement;
  let el:HTMLElement;
  var originalTimeout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        
      ],
      providers: [AccountSettingsService],
      schemas:      [ NO_ERRORS_SCHEMA ],
    });
      fixture = TestBed.createComponent(AccountSettingsComponent);
      component = fixture.componentInstance;
     component.ngOnInit();
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('settings name invalid less than 3 chars', ()=>{
    let settingsElement: DebugElement;
           let debugElement = fixture.debugElement;
           settingsElement = fixture.debugElement.query(By.css('button#signInButton'));
           
    component.form.controls['name'].setValue('de');
    component.form.controls['country'].setValue('Egypt');
    expect(component.form.controls['name'].valid).toBeFalsy();
    expect(component.form.controls['country'].valid).toBeTruthy();
     let authService = debugElement.injector.get(AccountSettingsService);
     let nameSpy = spyOn(authService, 'changeName').and.callThrough();
     let countrySpy = spyOn(authService, 'changeCountry').and.callThrough();
     
     settingsElement = fixture.debugElement.query(By.css('button#saveButton'));
  
     settingsElement.triggerEventHandler('click', null);
     expect(nameSpy).toHaveBeenCalledTimes(0);
     expect(countrySpy).toHaveBeenCalledTimes(1);
});

fit('settings city than 3 chars wont call service render error message', ()=>{
  let settingsElement: DebugElement;
  let debugElement = fixture.debugElement;    
  const compiled = fixture.debugElement.nativeElement;     
  component.form.controls['city'].setValue('de');
  component.form.controls['country'].setValue('Egypt');
  expect(component.form.controls['city'].valid).toBeFalsy();
  expect(component.form.controls['country'].valid).toBeTruthy();
   let authService = debugElement.injector.get(AccountSettingsService);
   let citySpy = spyOn(authService, 'changeCity').and.callThrough();
   let countrySpy = spyOn(authService, 'changeCountry').and.callThrough();
   
   settingsElement = fixture.debugElement.query(By.css('button#saveButton'));
   component.form.controls['city'].markAsTouched();
   fixture.detectChanges();
   fixture.whenStable().then(() => { 
     const messages = compiled.querySelector('#errorSet');
     expect(messages).toBeTruthy();
   });
   settingsElement.triggerEventHandler('click', null);
   expect(citySpy).toHaveBeenCalledTimes(0);
   expect(countrySpy).toHaveBeenCalledTimes(1);
});

fit('open change password modal and input invalid form', ()=>{
  let settingsElement: DebugElement;
  let debugElement = fixture.debugElement;    
  const compiled = fixture.debugElement.nativeElement;     
  component.form.controls['city'].setValue('de');
  component.form.controls['country'].setValue('Egypt');
  expect(component.form.controls['city'].valid).toBeFalsy();
  expect(component.form.controls['country'].valid).toBeTruthy();
   let authService = debugElement.injector.get(AccountSettingsService);
   let citySpy = spyOn(authService, 'changeCity').and.callThrough();
   let countrySpy = spyOn(authService, 'changeCountry').and.callThrough();
   
   settingsElement = fixture.debugElement.query(By.css('button#saveButton'));
   component.form.controls['city'].markAsTouched();
   fixture.detectChanges();
   fixture.whenStable().then(() => { 
     const messages = compiled.querySelector('#errorSet');
     expect(messages).toBeTruthy();
   });
   settingsElement.triggerEventHandler('click', null);
   expect(citySpy).toHaveBeenCalledTimes(0);
   expect(countrySpy).toHaveBeenCalledTimes(1);
});


});
