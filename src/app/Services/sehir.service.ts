import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Sehir } from '../Models/Sehir';

@Injectable({
  providedIn: 'root'
})
export class SehirService {

  apiUrl="https://localhost:7017/api/";

  sehirler:Sehir[]=[]

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Sehir[]>
  {
    let newPath=this.apiUrl+"sehirler/getall"
    return this.httpClient.get<Sehir[]>(newPath);   
  }
}
