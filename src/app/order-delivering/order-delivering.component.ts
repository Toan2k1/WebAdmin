import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from "../models/order";
import {OrderService} from "../service/order.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {EditOrderComponent} from "../dialog/edit-order/edit-order.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-delivering',
  templateUrl: './order-delivering.component.html',
  styleUrls: ['./order-delivering.component.scss']
})
export class OrderDeliveringComponent implements OnInit {
  form!: FormGroup;
  ELEMENT_DATA!:Order[]
  constructor(private orderService: OrderService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['nameUser','address','phone','productName','quantity','price','color','status','action'];
  dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.form=new FormGroup(
      {
        search:new FormControl("")
      }
    )
    this.getListOrderDelivery()
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
  getListOrderDelivery(){
    this.orderService.getListOrderDelivery().subscribe((res:any) => {
      this.dataSource=res;
      console.log(res)
    })

  }

  search() {
    const data=this.form.value.search
    this.orderService.SearchDelivery(data).subscribe((res:any) => {
      console.log(res)
      this.dataSource=res
    })
  }


  editOrder(element: any) {
    this.dialog.open(EditOrderComponent,{
      width:'40%',
      data: element
    })
  }

}
