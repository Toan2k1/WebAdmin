import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    passwordxt:new FormControl('',[Validators.required]),
  })



  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,
              private router: Router,private  auth:AuthService) {
  }

  ngOnInit(): void {

  }

  submit(): void {
    const alert1=document.getElementsByClassName("alert1")[0] as HTMLElement
    const alert2=document.getElementsByClassName("alert2")[0] as HTMLElement
    const alert3=document.getElementsByClassName("alert3")[0] as HTMLElement
    const pw1 = (<HTMLInputElement>document.getElementById("password")).value
    const pw2 = (<HTMLInputElement>document.getElementById("passwordxt")).value
    if(pw1==pw2){
    const user = this.form.value;
    this.auth.register(user).subscribe(
      res=>{
        alert3.classList.add("is-active")
        setTimeout(()=>{
          alert3.classList.remove("is-active")
         },4000)
           },
      res=>{
        alert1.classList.add("is-active")
        setTimeout(()=>{
          alert1.classList.remove("is-active"),
            this.router.navigate(['/login'])
        },4000)
      }
    );
    }
    else {
      alert2.classList.add("is-active")
      setTimeout(()=>{
        alert2.classList.remove("is-active")


      },4000)
    }
    }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  get passwordxt(){
    return this.form.get('passwordxt');
  }
  get email(){
    return this.form.get('email');
  }
}
