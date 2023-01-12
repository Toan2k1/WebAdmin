import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CatalogService} from "../../service/catalog.service";

@Component({
  selector: 'app-add-catalog-dialog',
  templateUrl: './add-catalog-dialog.component.html',
  styleUrls: ['./add-catalog-dialog.component.scss']
})
export class AddCatalogDialogComponent implements OnInit {

  form= new FormGroup({
    name:new FormControl('',[Validators.required]),
  })
  constructor(private catalogService:CatalogService,
              public dialogRef: MatDialogRef<AddCatalogDialogComponent>) { }

  ngOnInit(): void {

  }
  get name(){
    return this.form.get('name');
  }


  Submit() {
    const catalog =this.form.value;
    this.catalogService.addCatalog(catalog).subscribe(res => {
      alert("Thành Công");
      this.dialogRef.close();
      window.location.reload();
    },error => {
      alert("Không Thành Công")
    })
  }

}
