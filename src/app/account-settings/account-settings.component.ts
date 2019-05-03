import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from './account-settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

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
  saved:boolean=false;
  errorNum: number=0;
  imgSuccess:boolean;
  passBtn:boolean=false;
  passErr:string;
  deErr:boolean=false;
  deText:string;
  
  btnClicked:boolean=false;
  uploadClicked:boolean=false;
  
  constructor(private service:AccountSettingsService,private fb:FormBuilder,private router:Router ) { 
   
    
    this.form=this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      country: ['',[Validators.required,Validators.minLength(3)]],
       countryViewable: ['',[Validators.required]],
       city: ['',[Validators.required,Validators.minLength(3)]],
       cityViewable: ['',[Validators.required]],
       birthday: ['',[Validators.required]],
       birthViewable: ['',[Validators.required]]
       });

       this.formPass=this.fb.group({
        password: ['',[Validators.required,Validators.minLength(1)]],
         newPassword: ['',[Validators.required,Validators.minLength(5)]],
         newPassword_confirmation: ['',[Validators.required,Validators.minLength(5)]],
        
         });

         this.formDelete=this.fb.group({
          password: ['',[Validators.required,Validators.minLength(1)]],
         
          
           });
  }
  
  get name() { return this.form.get('name'); }
  get country() { return this.form.get('country'); }
  get city() { return this.form.get('city'); }
  get password() { return this.formPass.get('password'); }
  get newPassword() { return this.formPass.get('newPassword'); }
  get newPassword_confirmation() { return this.formPass.get('newPassword_confirmation'); }

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
        this.uploadClicked=true;
        this.imgSuccess=true;
      },err=>{console.log(err);
        this.uploadClicked=true;
      this.imgSuccess=false;})
  }
  onSaving(){
    const val = this.form.value;
    this.btnClicked=true;
    console.log(val.country);
    this.errorNum=0;
    this.saved=false;
    
  
    if(this.form.get('name').valid){
      this.service.changeName(val.name).subscribe(
        (data:any)=>{
          console.log(data);
        },err=>{this.errorNum++;}
      )
    }
   
    
  
    if(this.form.get('country').valid){
    this.service.changeCountry(val.country).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )
  }

  if(this.form.get('city').valid){
    this.service.changeCity(val.city).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )}

    if(val.birthday!=""){
    this.service.changeBirthday(val.birthday).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )}

    if(val.countryViewable!=""){
    this.service.changeCountryView(val.countryViewable).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )}

    if(val.cityViewable!=""){
    this.service.changeCityView(val.cityViewable).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )}

    if(val.birthViewable!=""){
    this.service.changeBirthView(val.birthViewable).subscribe(
      (data:any)=>{
        console.log(data);
      },err=>{this.errorNum++;}
    )}
if(this.errorNum>0){
  this.saved=false;
}
else
  this.saved=true;
   
    
  }

  changePass(){
   const val= this.formPass.value;
   if(this.formPass.valid){
    this.service.changePassword(val.password,val.newPassword,val.newPassword_confirmation).subscribe(
      (data:any)=>{
        console.log(data);
        this.passBtn=true;
      },err=>{console.log(err);
      this.passBtn=false;
    this.passErr=err.error.errors;})}
      

  }
  
  deactivate(){
    const val=this.formDelete.value;
    if(this.formDelete.valid){
    this.service.delete(val.password).subscribe(
      (data:any)=>{
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      },err=>{console.log(err);
      this.deErr=true;
    this.deText=err.error.errors;})}
      else{
this.deErr=true;
this.deText='password field is required'
      }

  }



}
