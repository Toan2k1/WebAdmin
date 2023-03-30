import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {MatDialogRef} from "@angular/material/dialog";

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
    private auth:UserService,
    public dialogRef: MatDialogRef<SignInComponent>
  ) { }

  ngOnInit(): void {

  }

  Submit():void{
    const alert1=document.getElementsByClassName("alert1")[0] as HTMLElement
    const alert3=document.getElementsByClassName("alert3")[0] as HTMLElement
    const user = this.form.value;
    this.auth.login(user).subscribe(
      res=>{
        localStorage.setItem("user",user.username)
        this.dialogRef.close()
        window.location.reload()
      },
      err=>{


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
