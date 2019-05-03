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
        
        return this.http.get<any>(this.url+'/api/showsetting');
        
       }
      
       changeCountry(country:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changecountry?newCountry='+country);
        
       }
    
       changeCity(city:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changecity?newCity='+city);
        
       }
       changeBirthday(birthday:Date): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changebirthday?newBirthday='+birthday);
        
       }

       changeCountryView(country:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemycountry?seeMyCountry='+country);
        
       }
       changeCityView(city:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemycity?seeMyCity='+city);
        
       }
       changeBirthView(birthday:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemybirthday?seeMyBirthday='+birthday);
        
       }
      changePassword(password:string,newPassword:string,newPassword_confirmation:string): Observable<any>
 {
   return this.http.post(this.url+'/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
 }

 changeImage(image:File): Observable<any>
 {
  console.log(image);
     const formData: FormData=new FormData();
     formData.append('image', image,image.name);
     
console.log(formData);
   return this.http.post(this.url+'/api/changeimage',formData) ;
 }
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>(this.url+'/api/changename?newName='+newName);
    
   }

   delete(password:string): Observable<any>
 {
   return this.http.post(this.url+'/api/delete',{password}) ;
 }




  }
  
