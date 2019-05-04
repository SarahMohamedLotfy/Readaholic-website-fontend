import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from './forget-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/**page that handles emails send to user either to change password or to verify email */
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
/**a constructor that bulids the form used to change password */
  constructor(private httpService:ForgetPasswordService ,  private router: Router ,private activatedRoute: ActivatedRoute,private fb:FormBuilder) { 

    this.form=this.fb.group({
      password: ['',[Validators.required,Validators.minLength(5)]],
      password_confirmation: ['',[Validators.required,Validators.minLength(5)]]
      });
  }

  /**a string to store token */
token:string;
/**stores type of operation:forget password or verify */
type:string;
/**stores userId */
userId:number;
/**boolean to check if token correct */
confirmedToken:boolean=false;
/**@ignore */
form:FormGroup;
/**@ignore */
forgot:boolean=false;
/**@ignore */
verify:boolean=false;

/**@ignore */
errText:string;
/**@ignore */
errPass:boolean=false;
/**@ignore */
errGenral:boolean=false;
/**@ignore */
text:string;
/**@ignore */
get password() { return this.form.get('password'); }
/**@ignore */
get password_confirmation() { return this.form.get('password_confirmation'); }
/**intiates the componet and gets the params of the url to set the token and set the type of operation if it's forget password it sends the token through a request to server to check validity if valid it shows the forget password
 * form , if the type is verify it checks token and if valid reroute to home page
 */
  ngOnInit() {
    console.log('noway');
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
/**called when change password button called to check validity of the form and send it to the server to change password of the user */
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
