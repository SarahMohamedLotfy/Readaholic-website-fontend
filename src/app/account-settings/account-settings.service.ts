import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  export class AccountSettingsService {


    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}

    showSetting(): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/showsetting');
        
       }
      
       changeCountry(country:string): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/changecountry?newCountry='+country);
        
       }
    
       changeCity(city:string): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/changecity?newCity='+city);
        
       }
       changeBirthday(birthday:Date): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/changebirthday?newBirthday='+birthday);
        
       }

       changeCountryView(country:string): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/whocanseemycountry?seeMyCountry='+country);
        
       }
       changeCityView(city:string): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/whocanseemycity?seeMyCity='+city);
        
       }
       changeBirthView(birthday:string): Observable<any> {
        
        return this.http.get<any>('http://f829bfdb.ngrok.io/api/whocanseemybirthday?seeMyBirthday='+birthday);
        
       }
      changePassword(password:string,newPassword:string,newPassword_confirmation:string): Observable<any>
 {
   return this.http.post('http://f829bfdb.ngrok.io/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
 }

 changeImage(image:File): Observable<any>
 {
  console.log(image);
     const formData: FormData=new FormData();
     formData.append('image', image,image.name);
     
console.log(formData);
   return this.http.post('http://f829bfdb.ngrok.io/api/changeimage',formData) ;
 }
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>('http://f829bfdb.ngrok.io/api/changename?newName='+newName);
    
   }

   delete(password:string): Observable<any>
 {
   return this.http.post('http://f829bfdb.ngrok.io/api/delete',{password}) ;
 }




  }
  
