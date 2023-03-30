import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from "../models/order";
import {MatDialog} from "@angular/material/dialog";
import {EditOrderComponent} from "../dialog/edit-order/edit-order.component";
import {OrderService} from "../service/order.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-oder-prepare',
  templateUrl: './oder-prepare.component.html',
  styleUrls: ['./oder-prepare.component.scss']
})
export class OderPrepareComponent implements OnInit {
  form!:FormGroup
  ELEMENT_DATA!:Order[]
  constructor(private orderService: OrderService,private dialog:MatDialog) { }


  displayedColumns: string[] = ['nameUser','address','phone','productName','quantity','price','color','status','action'];
  dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getListOrderSuccess()
    this.form=new FormGroup(
      {
        search:new FormControl("")
      }
    )
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
  getListOrderSuccess(){
    this.orderService.getListOrderSuccess().subscribe((res:any) => {
      this.dataSource=res;
      console.log(res)
    })

  }
  search() {
    const data=this.form.value.search
    this.orderService.SearchHandle(data).subscribe((res:any) => {
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
