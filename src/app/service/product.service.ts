import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Catalog} from "../models/catalog";
import {Product} from "../models/product";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpclient:HttpClient) { }
  getlistProduct():Observable<Product[]>{
    return this.httpclient.get<Product[]>(`http://localhost:8000/api/product/getAll`);
  }
  deleteProduct = (id: string) => this.httpclient.delete(`http://localhost:8000/api/product/delete/${id}`)
  addProduct(formData: any){
    return this.httpclient.post<any>('http://localhost:8000/api/product/add',formData)
  }
  editProduct=(data:any,id:number)=>this.httpclient.put<any>(`http://localhost:8000/api/product/update`+id,data)

}
