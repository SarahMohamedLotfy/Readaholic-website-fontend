import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from './account-settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ForgetPasswordService } from '../forget-password/forget-password.service';
import { LogInHttpService } from '../log-in/log-in-http.service';
/**page that show account settings of user */
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
/**form that shows settings */
  form: FormGroup;
  /**form for changing password */
  formPass: FormGroup;
  /**stores user settings info */
  settings:any;
  /**form for deactivating account */
  formDelete: FormGroup;
  /**input to store img file */
  selectedFile: File= null;
  /**boolean to check wheathe img uploaded */
  saved:boolean=false;
  /**@ignore */
  errorNum: number=0;
  /**@ignore */
  imgSuccess:boolean;
  /**@ignore */
  passBtn:boolean=false;
  /**@ignore */
  passErr:string;
  /**@ignore */
  deErr:boolean=false;
  /**@ignore */
  deText:string;
  /**@ignore */
  btnClicked:boolean=false;
  /**@ignore */
  uploadClicked:boolean=false;
  email:String;

  verifys:number;
isNotVer:boolean;

verErr:boolean=false;
verSucc:boolean=false;
verText:string;
  /**consturctor that builds all the forms */
  constructor(private service:AccountSettingsService,private fb:FormBuilder,private router:Router,private ser:LogInHttpService ) { 
    
  
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
  /**@ignore */
  get name() { return this.form.get('name'); }
  /**@ignore */
  get country() { return this.form.get('country'); }
  /**@ignore */
  get city() { return this.form.get('city'); }
  /**@ignore */
  get password() { return this.formPass.get('password'); }
  /**@ignore */
  get newPassword() { return this.formPass.get('newPassword'); }
  /**@ignore */
  get newPassword_confirmation() { return this.formPass.get('newPassword_confirmation'); }
/**initates the page by calling the service that gets the current settings of the user and display them */
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
       
       this.verifys = this.settings.verified;
       if(this.verifys==0)
       {
        this.isNotVer=true;
       }
       else{
         this.isNotVer=false;
       }
       this.email=this.settings.email;

      },
      err => {console.log(err);})
        

 
  }
/**function when select img button clicked to choose a file and store it as input and display it */
  onFileSelected(event){
    this.selectedFile=<File>event.srcElement.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.settings.image_link = e.target.result;
    };

    reader.readAsDataURL(this.selectedFile);
    
  }


/**fuction called when upload button clicked to upload img to server and change img of the user */
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

  /**function called to save changes done to the profile settings */
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
/**fuction that changes password of user */
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
  /**function to deactivate the account of the user */
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

  verEm(){
    this.verErr=false;
    this.verSucc=false;
    this.ser.verify().subscribe((data:any)=>{
      console.log(data);
      this.verSucc=true

    
    },err=>{console.log(err);
    this.verErr=true;
});

  }


}
