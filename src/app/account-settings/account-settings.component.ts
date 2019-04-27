import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from './account-settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  form: FormGroup;
  formPass: FormGroup;
  settings:any;
  formDelete: FormGroup;
  selectedFile: File= null;
  
  constructor(private service:AccountSettingsService,private fb:FormBuilder,private router:Router ) { 
   
    
    this.form=this.fb.group({
      name: ['',[Validators.required]],
      country: ['',[Validators.required]],
       countryViewable: ['',[Validators.required]],
       city: ['',[Validators.required]],
       cityViewable: ['',[Validators.required]],
       birthday: ['',[Validators.required]],
       birthViewable: ['',[Validators.required]]
       });

       this.formPass=this.fb.group({
        password: ['',[Validators.required]],
         newPassword: ['',[Validators.required]],
         newPassword_confirmation: ['',[Validators.required]],
        
         });

         this.formDelete=this.fb.group({
          password: ['',[Validators.required]],
         
          
           });
  }
  
  ngOnInit() {
    
    
    this.service.showSetting().subscribe(
      (data:any) => {
        this.settings=data.user;
        this.form.value.country=this.settings.country; 
        this.form.value.city=this.settings.city;
        this.form.value.birthday=this.settings.birthday; 
        this.form.value.countryViewable=this.settings.see_my_country; 
        this.form.value.cityViewable=this.settings.see_my_city;
        this.form.value.birthViewable=this.settings.see_my_birthday; 
        console.log(data);
       
       

      },
      err => {console.log(err);})
        

 
  }

  onFileSelected(event){
    this.selectedFile=<File>event.srcElement.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.settings.image_link = e.target.result;
    };

    reader.readAsDataURL(this.selectedFile);
    
  }

  onUpload(){
    this.service.changeImage(this.selectedFile).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{console.log(err)})
  }
  onSaving(){
    const val = this.form.value;
    
    console.log(val.country);

    if(val.name!=""){
      this.service.changeName(val.name).subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
    }
  
    if(val.country!=""){
    this.service.changeCountry(val.country).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

  if(val.city!=""){
    this.service.changeCity(val.city).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )}

    if(val.birthday!=""){
    this.service.changeBirthday(val.birthday).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )}

    if(val.countryViewable!=""){
    this.service.changeCountryView(val.countryViewable).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )}

    if(val.cityViewable!=""){
    this.service.changeCityView(val.cityViewable).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )}

    if(val.birthViewable!=""){
    this.service.changeBirthView(val.birthViewable).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )}

   
    
  }

  changePass(){
   const val= this.formPass.value;
    this.service.changePassword(val.password,val.newPassword,val.newPassword_confirmation).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{console.log(err)})
      

  }
  
  deactivate(){
    const val=this.formDelete.value;
    this.service.delete(val.password).subscribe(
      (data:any)=>{
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      },err=>{console.log(err)})

  }



}
