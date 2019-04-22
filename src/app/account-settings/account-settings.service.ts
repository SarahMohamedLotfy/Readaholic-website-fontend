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
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/showsetting');
        
       }
      
       changeCountry(country:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changecountry?newCountry='+country);
        
       }
    
       changeCity(city:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changecity?newCity='+city);
        
       }
       changeBirthday(birthday:Date): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changebirthday?newBirthday='+birthday);
        
       }

       changeCountryView(country:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/whocanseemycountry?seeMyCountry='+country);
        
       }
       changeCityView(city:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/whocanseemycity?seeMyCity='+city);
        
       }
       changeBirthView(birthday:string): Observable<any> {
        
        return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/whocanseemybirthday?seeMyBirthday='+birthday);
        
       }
      changePassword(password:string,newPassword:string,newPassword_confirmation:string): Observable<any>
 {
   return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changepassword',{password,newPassword,newPassword_confirmation}) ;
 }

 changeImage(image:File): Observable<any>
 {
     const formData: FormData=new FormData();
     formData.append('image', image,image.name);
     
console.log(formData);
   return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changeimage',{formData}) ;
 }
 changeName(newName:string): Observable<any> {
        
    return this.http.get<any>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/changename?newName='+newName);
    
   }

   delete(password:string): Observable<any>
 {
   return this.http.post('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/delete',{password}) ;
 }




  }
  
