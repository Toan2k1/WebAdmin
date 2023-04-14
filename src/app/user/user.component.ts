import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "../dialog/add-user-dialog/add-user-dialog.component";
import {EditUserDialogComponent} from "../dialog/edit-user-dialog/edit-user-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  ELEMENT_DATA!:User[]
  constructor(private UserService:UserService,public dialog:MatDialog) { }


  displayedColumns: string[] = ['position', 'name', 'password'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getListUser()
  }
  getListUser(){
    let resp = this.UserService.getlistUsers();
    resp.subscribe(report=> this.dataSource.data=report as unknown as User[])
  }
  deleteUser(id:string){
    this.UserService.deleteUser(id).subscribe(res=>{
      this.getListUser()
      alert("thành công")
    })
  }

  openDialog() {
    this.dialog.open(AddUserDialogComponent,{
      width:'40%'
    });
  }


  editUser(element: any) {
    this.dialog.open(EditUserDialogComponent,{
      width:'40%',
      data: element
    })
  }
}
