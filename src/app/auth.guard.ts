import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
/**A guard to check if a user is logged in before directing the page they requested */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  /**Constructor that takes routing */
  constructor(private router: Router)
  {}
  /**Checks if the user is logged in or not by check for the token , if logged in the guard returns true if not it redirects the user to login page and returns false  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (localStorage.getItem('token')!= null)
        return true;
      else
      {
        this.router.navigate(['/login']);
        return false}
    }
  }

