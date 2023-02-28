import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Catalog} from "../models/catalog";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpclient:HttpClient) { }
  getlistCatalog():Observable<Catalog[]>{
    return this.httpclient.get<Catalog[]>(`http://localhost:8000/api/cate/list`);
  }
  deleteCatalog = (id: string) => this.httpclient.delete(`http://localhost:8000/api/cate/delete/${id}`)
  addCatalog(catalog: any){
    return this.httpclient.post<any>('http://localhost:8000/api/cate/add',catalog)
  }
  editCatalog=(data:any,id:number)=>this.httpclient.put<any>(`http://localhost:8000/api/cate/update/`+id,data)
}
