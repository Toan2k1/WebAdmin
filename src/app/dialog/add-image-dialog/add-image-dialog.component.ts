import { Component, OnInit } from '@angular/core';
import {Catalog} from "../../models/catalog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CatalogService} from "../../service/catalog.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../models/product";
import {ImageService} from "../../service/image.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-image-dialog',
  templateUrl: './add-image-dialog.component.html',
  styleUrls: ['./add-image-dialog.component.scss']
})
export class AddImageDialogComponent implements OnInit {
  file!:File;
  image!:string;
  products: Product[] = []
  form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  constructor(private productService: ProductService, private imageService: ImageService,
              public dialogRef: MatDialogRef<AddImageDialogComponent>) {
  }

  ngOnInit(): void {
    this.getlistProduct();
  }



  getlistProduct() {
    this.productService.getlistProduct().subscribe(res => {
      this.products = res;
    })
  }

  selectFiles( event:any) {
    if(event.target.files){
      this.file = event.target.files[0];
      this.image=this.file.name;
    }

  }

  Submit() {
    const formData=new FormData();
    formData.append('productName',this.form.value.productName);
    formData.append('file',this.file);
    formData.append('image',this.image);
    this.imageService.addImage(formData).subscribe(result => {
      alert("thành công");
      this.dialogRef.close();
      window.location.reload();
    })
  }
}
