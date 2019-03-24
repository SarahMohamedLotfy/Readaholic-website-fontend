
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';


fdescribe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: { navigate: () => null } },   
      ]

      
    });

    guard = TestBed.get(AuthGuard);

    let store = {};
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
  spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
});
 

  fit('should not be able to activate when logged out', () => {
    
    localStorage.removeItem('token');
    const res = guard.canActivate(null, null);
    expect(res).toBeFalsy();
  });

  fit('should be able to activate when logged in', () => {
   
    localStorage.setItem('token','faketoken');
    const res = guard.canActivate(null, null);
    expect(res).toBeTruthy();
  });

 
});