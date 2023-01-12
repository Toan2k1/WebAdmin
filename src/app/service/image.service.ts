import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageModel} from "../models/ImageModel";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpclient: HttpClient) {
  }

  getlistImage(): Observable<ImageModel[]> {
    return this.httpclient.get<ImageModel[]>(`http://localhost:8000/images/get-list-image`);
  }

  deleteImage = (id: string) => this.httpclient.delete(`http://localhost:8000/images/deleteImage/${id}`)

  addImage(imageModel:any) {
    return this.httpclient.post<any>(`http://localhost:8000/images/addImage`,imageModel)
  }
}
