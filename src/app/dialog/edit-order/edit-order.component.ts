import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogService} from "../../service/catalog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { OrderService } from 'src/app/service/order.service';
import {OrderUpdate} from "../../models/orderUpdate";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  listOrder!: OrderUpdate[]

  listStatus = [
    'Đang Giao Hàng',
    'Đã Giao Thành Công',
  ]
  form!:FormGroup

  constructor(private orderService: OrderService, @Inject(MAT_DIALOG_DATA) public editData: any,
              public dialogRef: MatDialogRef<EditOrderComponent>) {
  }

  ngOnInit(): void {

    this.form=new FormGroup({
      status: new FormControl
    })
    if(this.editData){
      this.form.controls['status'].setValue(this.editData.status)
    }
  this.getlistOrder();
  }

  getlistOrder() {
    this.orderService.getlistOrder().subscribe((res: any) => {
      this.listOrder = res;
      console.log(res)
    })
  }

  confirm() {
    const data: OrderUpdate = {
      id:this.editData.id,
      status:this.form.value.status
    };
    this.orderService.editOrder(data).subscribe(res => {
      this.dialogRef.close();
      window.location.reload();
    }, error => {
      alert("Không Thành Công")
    })
  }
}
