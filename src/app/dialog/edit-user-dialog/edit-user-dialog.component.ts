import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  form= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.email]),
  })
  constructor(private userService: UserService,@Inject(MAT_DIALOG_DATA) public editData:any,
              public dialogRef: MatDialogRef<EditUserDialogComponent>) { }

  ngOnInit(): void {
    if(this.editData){
      this.form.controls['username'].setValue(this.editData.username);
      this.form.controls['email'].setValue(this.editData.email);
      this.form.controls['password'].setValue(this.editData.password);
    }

  }

  get username(){
    return this.form.get('username');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  Submit() {
    const user =this.form.value;
    this.userService.editUser(user,this.editData.id).subscribe(res => {
      this.dialogRef.close();
      window.location.reload();
      alert("Thành Công");
    },error => {
      alert("Không Thành Công")
    })
  }

}
