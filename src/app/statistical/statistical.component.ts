import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';
import {OrderService} from "../service/order.service";
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {
  sumUser!:any[]
  sumCatalog!:any[]
  sumProduct!:any[]
  sumOrder!:any[]
  sumMoney!:any[]
  sumOrderComplete!:any[]
  sumOrderCancel!:any[]
  totalUser:number=0
  totalCatalog:number=0
  totalProduct:number=0
  totalOrder:number=0
  totalMoney:number=0
  totalOrderComplete:number=0
  totalOrderCancel:number=0
  constructor(private userService: UserService,private productService: ProductService,
              private orderService: OrderService,private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.sumUser1()
    this.sumCatalog1()
    this.sumProduct1()
    this.sumOrder1()
    this.sumOrderComplete1()
    this.sumOrderCancel1()
    this.sumMoney1()
  }
  sumUser1(){
    this.userService.getlistUsers().subscribe(res => {
      this.sumUser=res
      this.sumUser.forEach((item:any) => {
        this.totalUser++
      })
      console.log(this.totalUser)
    })
  }
  sumCatalog1(){
    this.catalogService.getlistCatalog().subscribe(res => {
      this.sumCatalog=res
      this.sumCatalog.forEach((item:any) => {
        this.totalCatalog++
      })
      console.log(this.totalCatalog)
    })
  }
  sumProduct1(){
    this.productService.getlistProduct().subscribe(res => {
      this.sumProduct=res
      this.sumProduct.forEach((item:any) => {
        this.totalProduct++
      })
      console.log(this.totalProduct)
    })
  }
  sumOrder1(){
    this.orderService.getlistOrder().subscribe(res => {
      this.sumOrder=res
      this.sumOrder.forEach((item:any) => {
        this.totalOrder++
      })
      console.log(this.totalOrder)
    })
  }
  sumOrderComplete1(){
    this.orderService.getListOrderComplete().subscribe(res => {
      this.sumOrderComplete=res
      this.sumOrderComplete.forEach((item:any) => {
        this.totalOrderComplete++
      })
      console.log(this.totalOrderComplete)
    })
  }
  sumOrderCancel1(){
    this.orderService.getListOrderCancel().subscribe(res => {
      this.sumOrderCancel=res
      this.sumOrderCancel.forEach((item:any) => {
        this.totalOrderCancel++
      })
      console.log(this.totalOrderCancel)
    })
  }
  sumMoney1() {
    this.orderService.Sum().subscribe((res:any) => {
      this.totalMoney=res
    })
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
}
