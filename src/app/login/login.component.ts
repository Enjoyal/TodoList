import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname='';
  pswd='';
  
  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 @]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private ds:DataService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
    // alert('Login clicked')
    var uname=this.loginForm.value.uname;  //1000
    var pswd=this.loginForm.value.pswd;  //1000

    if(this.loginForm.valid){
      const result=this.ds.login(uname, pswd);

        if(result){
          alert('Login Successful')
          this.router.navigateByUrl('dashboard')
        }
        else{
          alert('invalid password')
        }
    }else{
      alert('Invalid Form')
    }
    
  }
}
