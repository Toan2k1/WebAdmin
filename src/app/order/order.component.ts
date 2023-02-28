import {Component, OnInit, ViewChild} from '@angular/core';
import {Catalog} from "../models/catalog";
import {CatalogService} from "../service/catalog.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AddCatalogDialogComponent} from "../dialog/add-catalog-dialog/add-catalog-dialog.component";
import {EditCatalogDialogComponent} from "../dialog/edit-catalog-dialog/edit-catalog-dialog.component";
import {Order} from "../models/order";
import {OrderService} from "../service/order.service";
import {EditOrderComponent} from "../dialog/edit-order/edit-order.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  ELEMENT_DATA!:Order[]
  constructor(private orderService: OrderService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['nameUser','address','phone','productName','quantity','price','color','status','action'];
  dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getlistOrder()
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
  getlistOrder(){
    this.orderService.getlistOrder().subscribe((res:any) => {
      this.dataSource=res;
      console.log(res)
    })

  }




  editOrder(element: any) {
    this.dialog.open(EditOrderComponent,{
      width:'40%',
      data: element
    })
  }

}
