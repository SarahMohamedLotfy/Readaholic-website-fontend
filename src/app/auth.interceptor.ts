import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


/**interceptor that set the authorization header of all requests that needs authentication */
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
/**constructor that takes routing */
constructor(private router: Router){}
/**It intercepts all http requests of logged in users and adds the token of the user to the Authorization header of the request  */
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
     if(localStorage.getItem('token')!=null)
    {
        
        const clonedReq= req.clone({headers: req.headers.set('Authorization','bearer '+localStorage.getItem('token'))});
        return next.handle(clonedReq).pipe( tap(
            succ =>{},
            err=> {
                
                if(err.status ==401)
                {localStorage.removeItem('token');
                this.router.navigateByUrl('/login');}
            }
        ))
    }
    else 
    return next.handle(req.clone());
}
}