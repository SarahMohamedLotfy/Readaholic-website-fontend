import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**http service for account settings requests */
@Injectable({
    providedIn: 'root'
  })

  export class AccountSettingsService {
    /**@ignore */
  url:string=AppConstants.baseURL;
  //url:string='http://0ea47257.ngrok.io';
    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}
    //urlName:string='http://ec2-52-90-5-77.compute-1.amazonaws.com';
/**request to show current settings of user */
    showSetting(): Observable<any> {
      //return this.http.get<any>('http://localhost:3000/accountSettings' );
        return this.http.get<any>(this.url+'/api/showsetting');
        
       }
      /**request to change country of user */
       changeCountry(country:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changecountry?newCountry='+country);
        
       }
    /**request to change city of user */
       changeCity(city:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changecity?newCity='+city);
        
       }
       /**request to change birthday of user */
       changeBirthday(birthday:Date): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/changebirthday?newBirthday='+birthday);
        
       }
/**request to show who can view my country  */
       changeCountryView(country:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemycountry?seeMyCountry='+country);
        
       }

       /**request to show who can view my city */
       changeCityView(city:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemycity?seeMyCity='+city);
        
       }
       /**request to show who can see my birthday */
       changeBirthView(birthday:string): Observable<any> {
        
        return this.http.get<any>(this.url+'/api/whocanseemybirthday?seeMyBirthday='+birthday);
        
       }
       /**request to change pass */
      changePassword(password:string,newPassword:string,newPassword_confirmation:string): Observable<any>
 {
   return this.http.post(this.url+'/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
 }
/**request to upload new image */
 changeImage(image:File): Observable<any>
 {
  console.log(image);
     const formData: FormData=new FormData();
     formData.append('image', image,image.name);
     
console.log(formData);
   return this.http.post(this.url+'/api/changeimage',formData) ;
 }

 /**request to change name of user */
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>(this.url+'/api/changename?newName='+newName);
    
   }
/**request to delete account */
   delete(password:string): Observable<any>
 {
   return this.http.post(this.url+'/api/delete',{password}) ;
 }




  }
  
