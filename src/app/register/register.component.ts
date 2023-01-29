import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname='';
  pswd='';
  pswd2='';

  //register model
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 @]*')]], //array
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    pswd2:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })

  constructor(private router:Router,private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert('Clicked register')
    console.log(this.registerForm); //value:
    
    var uname=this.registerForm.value.uname;
    var pswd=this.registerForm.value.pswd;
    var pswd2=this.registerForm.value.pswd2;


  if(this.registerForm.valid){
   
    console.log(this.registerForm.get('uname')?.errors);

    const result=this.ds.register(uname,pswd,pswd2);
    if(result){
      alert('Register successful');
      this.router.navigateByUrl('');
    }
    else{
      alert('register failed');
      // this.router.navigateByUrl('')

    }
  }else{
    alert('Invalid form');
  }

  }
}
