import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CatalogService} from "../../service/catalog.service";

@Component({
  selector: 'app-edit-catalog-dialog',
  templateUrl: './edit-catalog-dialog.component.html',
  styleUrls: ['./edit-catalog-dialog.component.scss']
})
export class EditCatalogDialogComponent implements OnInit {

  form= new FormGroup({
    name:new FormControl('',[Validators.required]),

  })
  constructor(private catalogService:CatalogService,@Inject(MAT_DIALOG_DATA) public editData:any,
              public dialogRef: MatDialogRef<EditCatalogDialogComponent>) { }

  ngOnInit(): void {
    if(this.editData){
      this.form.controls['name'].setValue(this.editData.name);
    }

  }

  get name(){
    return this.form.get('name');
  }


  Submit() {
    const catalog =this.form.value;
    this.catalogService.editCatalog(catalog,this.editData.id).subscribe(res => {
      this.dialogRef.close();
      window.location.reload();
      alert("Thành Công");
    },error => {
      alert("Không Thành Công")
    })
  }

}
