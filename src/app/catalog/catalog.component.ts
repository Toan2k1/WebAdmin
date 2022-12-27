import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../service/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
ELEMENT_DATA!:User[]
  constructor(private UserService: UserService) { }


  displayedColumns: string[] = ['position', 'name', 'password', 'email','action'];
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
}




