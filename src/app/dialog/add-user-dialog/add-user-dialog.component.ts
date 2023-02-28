import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  form= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  })
  constructor(private userService: UserService,

              public dialogRef: MatDialogRef<AddUserDialogComponent>) { }

  ngOnInit(): void {

  }
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }


  Submit() {
  const user =this.form.value;
  this.userService.register(user).subscribe(res => {
    alert("Không Thành Công");
  },error => {
    alert("Thành Công");
    this.dialogRef.close();
    window.location.reload();
  })
  }
}
