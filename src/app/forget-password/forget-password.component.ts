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
      password: ['',[Validators.required]],
      password_confirmation: ['',[Validators.required]]
      });
  }
token:string;
userId:number;
confirmedToken:boolean=false;
form:FormGroup;
  ngOnInit() {
    this.activatedRoute.queryParams
    
    .subscribe(params => {
      // if we didn't receive any parameters, 
      // we can't do anything
      if (!params) this.router.navigate(['/home']);

      this.token = params['token'];})

      console.log(this.token);

    this.httpService.check(this.token).subscribe(
      (data:any) =>{console.log(data);
      this.userId=data.userID;
    console.log(this.userId);
  this.confirmedToken=true;
},
      (err: any) => console.log(err)
       );

  }

  save(){
    const val = this.form.value;
    console.log(val.password);
    console.log(val.password_confirmation);
    this.httpService.changePass(val.password,val.password_confirmation,this.userId).subscribe(
      (data:any) =>{console.log(data);
    
},
      (err: any) => console.log(err)
       );
  }

}
