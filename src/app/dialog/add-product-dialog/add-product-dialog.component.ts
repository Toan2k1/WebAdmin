import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogService} from "../../service/catalog.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../service/product.service";
import {Catalog} from "../../models/catalog";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {
  catalog:Catalog[]=[]
  file!:File;
  avatar!:string;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })

  constructor(private productService: ProductService,private catalogService:CatalogService,
              public dialogRef: MatDialogRef<AddProductDialogComponent>) {
  }

  ngOnInit(): void {
this.getlistCatalog()
  }

  get name() {
    return this.form.get('name');
  }

  get categoryName() {
    return this.form.get('categoryName');
  }

  get size() {
    return this.form.get('size');
  }

  get description() {
    return this.form.get('description');
  }

  get color() {
    return this.form.get('color');
  }

  get price() {
    return this.form.get('price');
  }


  Submit() {
    const formData=new FormData();
    formData.append('name',this.form.value.name);
    formData.append('price',this.form.value.price);
    formData.append('description',this.form.value.description);
    formData.append('categoryName',this.form.value.categoryName);
    formData.append('quantity',this.form.value.quantity);
    formData.append('color',this.form.value.color);
    formData.append('size',this.form.value.size);
    formData.append('file',this.file);
      this.productService.addProduct(formData).subscribe(res => {
        console.log(formData);
        console.log(res);
        alert("Thành Công");
        this.dialogRef.close();
        window.location.reload();
      }, error => {
        console.log(formData);
        alert("Không Thành Công")
      })
    }



  getlistCatalog(){
    this.catalogService.getlistCatalog().subscribe(res => {
      this.catalog=res;
    })
  }

  selectFiles( event:any) {
    if(event.target.files){
      this.file = event.target.files[0];
      this.avatar=this.file.name;
    }
  }
}
