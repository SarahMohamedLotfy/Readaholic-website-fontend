import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  export class AccountSettingsService {
  url:string=AppConstants.baseURL;

    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}
    urlName:string='http://ec2-52-90-5-77.compute-1.amazonaws.com';

    showSetting(): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/showsetting');
=======
        return this.http.get<any>(this.urlName+'/api/showsetting');
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
      
       changeCountry(country:string): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/changecountry?newCountry='+country);
=======
        return this.http.get<any>(this.urlName+'/api/changecountry?newCountry='+country);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
    
       changeCity(city:string): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/changecity?newCity='+city);
=======
        return this.http.get<any>(this.urlName+'/api/changecity?newCity='+city);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
       changeBirthday(birthday:Date): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/changebirthday?newBirthday='+birthday);
=======
        return this.http.get<any>(this.urlName+'/api/changebirthday?newBirthday='+birthday);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }

       changeCountryView(country:string): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/whocanseemycountry?seeMyCountry='+country);
=======
        return this.http.get<any>(this.urlName+'/api/whocanseemycountry?seeMyCountry='+country);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
       changeCityView(city:string): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/whocanseemycity?seeMyCity='+city);
=======
        return this.http.get<any>(this.urlName+'/api/whocanseemycity?seeMyCity='+city);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
       changeBirthView(birthday:string): Observable<any> {
        
<<<<<<< HEAD
        return this.http.get<any>(this.url+'/api/whocanseemybirthday?seeMyBirthday='+birthday);
=======
        return this.http.get<any>(this.urlName+'/api/whocanseemybirthday?seeMyBirthday='+birthday);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
        
       }
      changePassword(password:string,newPassword:string,newPassword_confirmation:string): Observable<any>
 {
<<<<<<< HEAD
   return this.http.post(this.url+'/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
=======
   return this.http.post(this.urlName+'/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
 }

 changeImage(image:File): Observable<any>
 {
  console.log(image);
     const formData: FormData=new FormData();
     formData.append('image', image,image.name);
     
console.log(formData);
<<<<<<< HEAD
   return this.http.post(this.url+'/api/changeimage',formData) ;
 }
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>(this.url+'/api/changename?newName='+newName);
=======
   return this.http.post(this.urlName+'/api/changeimage',formData) ;
 }
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>(this.urlName+'/api/changename?newName='+newName);
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
    
   }

   delete(password:string): Observable<any>
 {
<<<<<<< HEAD
   return this.http.post(this.url+'/api/delete',{password}) ;
=======
   return this.http.post(this.urlName+'/api/delete',{password}) ;
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
 }




  }
  
