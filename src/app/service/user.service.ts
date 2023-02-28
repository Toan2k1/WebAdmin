import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient ) {  }
  getlistUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`http://localhost:8000/api/auth/getListUser`);
  }
  deleteUser = (id: string) => this.httpClient.delete(`http://localhost:8000/api/DeleteUser/${id}`)
  register(user: any){
    return this.httpClient.post<any>('http://localhost:8000/api/auth/registry',user)
  }
  editUser=(data:any,id:number)=>this.httpClient.put<any>(`http://localhost:8000/api/editUser/`+id,data)
}
