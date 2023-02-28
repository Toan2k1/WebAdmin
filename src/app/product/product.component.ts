import {Component, OnInit, ViewChild} from '@angular/core';
import {Catalog} from "../models/catalog";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AddCatalogDialogComponent} from "../dialog/add-catalog-dialog/add-catalog-dialog.component";
import {EditCatalogDialogComponent} from "../dialog/edit-catalog-dialog/edit-catalog-dialog.component";
import { ProductService } from '../service/product.service';
import {Product} from "../models/product";
import {AddProductDialogComponent} from "../dialog/add-product-dialog/add-product-dialog.component";
import {EditProductDialogComponent} from "../dialog/edit-product-dialog/edit-product-dialog.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ELEMENT_DATA!:Product[]
  constructor(private productService:ProductService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['position', 'name','catalog','image','size','description','quantity','color','price','action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getlistProduct()
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
  getlistProduct(){
    let resp = this.productService.getlistProduct();
    resp.subscribe(report=>{this.dataSource.data=report as unknown as Product[],
    console.log(report)} )

  }
  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(res=>{
      this.getlistProduct()
      alert("thành công")
    })
  }
  openDialog() {
    this.dialog.open(AddProductDialogComponent,{
      width:'40%'
    });
  }


  editProduct(element: any) {
    this.dialog.open(EditProductDialogComponent,{
      width:'40%',
      data: element
    })
  }

}
