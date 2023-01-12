import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Catalog} from "../models/catalog";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpclient:HttpClient) { }
  getlistProduct():Observable<Product[]>{
    return this.httpclient.get<Product[]>(`http://localhost:8000/api/product/get-list-product`);
  }
  deleteProduct = (id: string) => this.httpclient.delete(`http://localhost:8000/api/product/deleteProduct/${id}`)
  addProduct(product: any){
    return this.httpclient.post<any>('http://localhost:8000/api/product/add-product',product)
  }
  editProduct=(data:any,id:number)=>this.httpclient.put<any>(`http://localhost:8000/api/product/edit-Product/`+id,data)
}
