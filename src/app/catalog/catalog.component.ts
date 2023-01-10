import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {User} from "../models/user";
import {Catalog} from "../models/catalog";
import {CatalogService} from "../service/catalog.service";
import {AddUserDialogComponent} from "../dialog/add-user-dialog/add-user-dialog.component";
import {EditUserDialogComponent} from "../dialog/edit-user-dialog/edit-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddCatalogDialogComponent} from "../dialog/add-catalog-dialog/add-catalog-dialog.component";
import { EditCatalogDialogComponent } from '../dialog/edit-catalog-dialog/edit-catalog-dialog.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
ELEMENT_DATA!:Catalog[]
  constructor(private catalogService:CatalogService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['position', 'name','action'];
  dataSource = new MatTableDataSource<Catalog>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getlistCatalog()
  }
  getlistCatalog(){
   let resp = this.catalogService.getlistCatalog();
   resp.subscribe(report=> this.dataSource.data=report as unknown as Catalog[])
  }
  deleteCatalog(id:string){
    this.catalogService.deleteCatalog(id).subscribe(res=>{
      this.getlistCatalog()
      alert("thành công")
    })
  }
  openDialog() {
    this.dialog.open(AddCatalogDialogComponent,{
      width:'40%'
    });
  }


  editCatalog(element: any) {
    this.dialog.open(EditCatalogDialogComponent,{
      width:'40%',
      data: element
    })
  }
}




