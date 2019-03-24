import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import{user} from 'src/app/classes/user';
import { user_shelves } from './classes/user_shelves';
/**creates a mock backend to authenticate login requests and any other other request that needs authorization */
@Injectable()

export class FakeBackendInterceptor implements HttpInterceptor {

    /** constructor that takes httpclient*/
    constructor(private http:HttpClient){}

   
    
    /**Mimics a backend server for the login requests by intercepting the request and checking if the user and password are correct and sending back a response accordingly , it also intercepts requests that require authorization to pass and check their authorization header for the token */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        
        const users: user[] = [
           
            { id:1,  username: 'mai', password: 'mai', image_link: 'kd' }
        ];
        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
    
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {
            
            console.log('first');
            // authenticate - public
            if (request.url.endsWith('/login') && request.method === 'POST') {
                
                console.log(request.body.email);
               
               
                const user = users.find(x => x.username === request.body.email && x.password === request.body.password);
                if(!request.body.email|| !request.body.password) return noInput('You must enter user name and password');
                if (!user) return error('Username or password is incorrect');
                return ok({
                    image_link: user.image_link,
                    username: user.username,
                    id: user.id,
                    
                    token: `fake-jwt-token`
                })
            }


            if (request.url.endsWith('/updates') && request.method === 'get') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                console.log('enter');
                if (request.headers.get('Authorization') === 'bearer fake-jwt-token') {
                    console.log('holaaa');
                    
                    return next.handle(request);
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            if (request.url.endsWith('/logOut') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                
                if (request.headers.get('Authorization') === 'bearer fake-jwt-token') {
                   
                    
                    return ok({});
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            

            // pass through any requests not handled above
            return next.handle(request);
        }))
        // call materialize and dematerialize to ensure delay even if an error is thrown 
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

        // private helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ status: 405, error: { message } });
        }

        function noInput(message){
            return throwError({status:404, error:{message}});
        }

        
    }
}
/**use fake backend in place of Http service for backend-less development */
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};