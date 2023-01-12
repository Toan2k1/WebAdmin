import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../service/product.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AddProductDialogComponent} from "../dialog/add-product-dialog/add-product-dialog.component";
import {EditProductDialogComponent} from "../dialog/edit-product-dialog/edit-product-dialog.component";
import {ImageService} from "../service/image.service";
import {ImageModel} from "../models/ImageModel";
import {AddImageDialogComponent} from "../dialog/add-image-dialog/add-image-dialog.component";

@Component({
  selector: 'app-image-product',
  templateUrl: './image-product.component.html',
  styleUrls: ['./image-product.component.scss']
})
export class ImageProductComponent implements OnInit {

  ELEMENT_DATA!:ImageModel[]
  constructor(private imageService: ImageService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['position','catalog','image','action'];
  dataSource = new MatTableDataSource<ImageModel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getlistImage()
  }
  getlistImage(){
    let resp = this.imageService.getlistImage();
    resp.subscribe(report=>{this.dataSource.data=report as unknown as ImageModel[]
      } )

  }
  deleteImage(id:string){
    this.imageService.deleteImage(id).subscribe(res=>{
      this.getlistImage()
      alert("thành công")
    })
  }
  openDialog() {
    this.dialog.open(AddImageDialogComponent,{
      width:'40%'
    });
  }


 /* editProduct(element: any) {
    this.dialog.open(EditProductDialogComponent,{
      width:'40%',
      data: element
    })
  }*/

}
