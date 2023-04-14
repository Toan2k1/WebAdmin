import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CatalogService} from "../../service/catalog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Catalog} from "../../models/catalog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
catalog:Catalog[]=[]
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })
  constructor(private productService: ProductService,private catalogService: CatalogService,
              @Inject(MAT_DIALOG_DATA) public editData:any,
              public dialogRef: MatDialogRef<EditProductDialogComponent>
              ) { }

  ngOnInit(): void {
    if(this.editData){
      this.form.controls['name'].setValue(this.editData.name);
      this.form.controls['categoryName'].setValue(this.editData.categoryName);
      this.form.controls['size'].setValue(this.editData.size);
      this.form.controls['description'].setValue(this.editData.description);
      this.form.controls['quantity'].setValue(this.editData.quantity);
      this.form.controls['color'].setValue(this.editData.color);
      this.form.controls['price'].setValue(this.editData.price);
    }
  this.getListcatalog()
  }
getListcatalog(){
  this.catalogService.getlistCatalog().subscribe(res => {
    this.catalog=res;
  })
}
  Submit(){
    const formData=new FormData();
    formData.append('id', this.editData.id);
    formData.append('name',this.form.value.name);
    formData.append('price',this.form.value.price);
    formData.append('description',this.form.value.description);
    formData.append('categoryName',this.form.value.categoryName);
    formData.append('quantity',this.form.value.quantity);
    formData.append('color',this.form.value.color);
    formData.append('size',this.form.value.size);

    this.productService.editProduct(formData).subscribe(res => {
      alert("Thành Công")
      this.dialogRef.close();
      window.location.reload();
    },
    err => {
      alert("Thất Bại")
    })
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
}
