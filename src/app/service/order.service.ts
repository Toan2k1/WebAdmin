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
  getListOrderCancel():Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:8000/api/order/getListOrderCancel`);
  }
  getListOrderDelivery():Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:8000/api/order/getListOrderDelivery`);
  }
  getListOrderSuccess():Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:8000/api/order/getListOrderSuccess`);
  }
  getListOrderComplete():Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:8000/api/order/getListOrderComplete`);
  }
  SearchComplete(data:any){
    return this.httpClient.get<Order>(`http://localhost:8000/api/order/searchComplete?name=${data}`)
  }
  SearchHandle(data:any){
    return this.httpClient.get<Order>(`http://localhost:8000/api/order/search_Waiting_For_Progressing?name=${data}`)
  }
  SearchDelivery(data:any){
    return this.httpClient.get<Order>(`http://localhost:8000/api/order/searchDelivery?name=${data}`)
  }
  SearchCancel(data:any){
    return this.httpClient.get<Order>(`http://localhost:8000/api/order/searchCancel?name=${data}`)
  }
  Sum(){
    return this.httpClient.get<Order>(`http://localhost:8000/api/order/sum`)
  }
}
