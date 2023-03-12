import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  constructor(
    private formBuilder:FormBuilder,
    private  httpClient:HttpClient,
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {

  }

  Submit():void{
    const alert1=document.getElementsByClassName("alert1")[0] as HTMLElement
    const alert3=document.getElementsByClassName("alert3")[0] as HTMLElement
    const user = this.form.value;
    this.auth.login(user).subscribe(
      res=>{
        console.log(res);
        alert1.classList.add("is-active")
        localStorage.setItem("token",res.accessToken);
        localStorage.setItem("user",user.username)
        setTimeout(()=>{
          alert1.classList.remove("is-active"),
            this.router.navigate(['/home'])
        },4000)

      },
      res=>{
        alert3.classList.add("is-active")
        setTimeout(()=>{
          alert3.classList.remove("is-active")
        },4000)
      }
    );
  }
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
