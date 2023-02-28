import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {OrderUpdate} from "../models/orderUpdate";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient ) {  }
  editOrder=(data:OrderUpdate)=>this.httpClient.put<any>(`http://localhost:8000/api/order/updateStatus`,data)
  getlistOrder():Observable<Order[]>{
    return this.httpClient.get<Order[]>(`http://localhost:8000/api/order/getListAll`);
  }
}
