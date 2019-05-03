import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from './forget-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private httpService:ForgetPasswordService ,  private router: Router ,private activatedRoute: ActivatedRoute,private fb:FormBuilder) { 

    this.form=this.fb.group({
      password: ['',[Validators.required,Validators.minLength(5)]],
      password_confirmation: ['',[Validators.required,Validators.minLength(5)]]
      });
  }
token:string;
type:string;
userId:number;
confirmedToken:boolean=false;
form:FormGroup;
forgot:boolean=false;
verify:boolean=false;


errText:string;
errPass:boolean=false;
errGenral:boolean=false;
text:string;

get password() { return this.form.get('password'); }
get password_confirmation() { return this.form.get('password_confirmation'); }

  ngOnInit() {
    this.activatedRoute.queryParams
    
    .subscribe(params => {
      // if we didn't receive any parameters, 
      // we can't do anything
      if (!params) this.router.navigate(['/home']);

      this.token = params['token'];
      this.type=params['type'];
    })

      console.log(this.token)
if(this.type=='forgot')
{
  this.forgot=true;
  this.errGenral=false;
    this.httpService.check(this.token).subscribe(
      (data:any) =>{console.log(data);
      this.userId=data.userID;
    console.log(this.userId);
  this.confirmedToken=true;
},
      (err: any) =>{ console.log(err);
        this.errGenral=true;
        this.text=err.error.error;
       
      });

  }
  else if(this.type=='verify'){
    this.verify=true;
    this.errGenral=false;
    this.httpService.checkVerify(this.token).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/home']);
      
    },(err:any)=>{
      if(err.status==500)
      {
        console.log(err);
      this.errGenral=true;
      this.text='This Url is old';
    this.verify=false;
      }
      else{
      console.log(err);
      this.errGenral=true;
      this.text=err.error.error;
    this.verify=false;}}
    );

  }
  else{
    this.router.navigate(['/home']);
  }

}

  save(){
    const val = this.form.value;
    console.log(val.password);
    console.log(val.password_confirmation);
    this.errPass=false;
   

    if(this.form.valid){
      
    this.httpService.changePass(val.password,val.password_confirmation,this.userId).subscribe(
      (data:any) =>{console.log(data);
        this.router.navigate(['/login']);
    
},
      (err: any) => {console.log(err);
      this.errPass=true;
    this.errText=err.error.error;}
       );
  }
 }

}
