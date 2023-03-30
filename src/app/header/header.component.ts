import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "../login/sign-in/sign-in.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username = localStorage.getItem("user");

  constructor(private usersservices: UserService, private router: Router,public dialog: MatDialog) {
  }

  ngOnInit(): void {
  const us=localStorage.getItem("user");
  const us1=document.getElementById("signIn") as HTMLElement;
  const us2=document.getElementById("logout") as HTMLElement;
  if(us==null){
    us1.classList.add("block")
    us2.classList.add("hidden")
  }else {
    us1.classList.add("hidden")
    us2.classList.add("block")
  }
  }
  logout()
  {
    localStorage.clear()
    window.location.reload()
  }
  openDialog1() {
    this.dialog.open(SignInComponent,{
      width:'40%'
    })
  }

}
