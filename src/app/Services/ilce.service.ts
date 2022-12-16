import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilce } from '../Models/Ilce';


@Injectable({
  providedIn: 'root'
})
export class IlceService {

  apiUrl="https://localhost:7017/api/";

  ilceler:Ilce[]=[]
  constructor(private httpClient:HttpClient) { }

  getBySehirId(id:number):Observable<Ilce[]>
  {
    let newPath=this.apiUrl+"ilceler/GetBySehirId?sehirId="+id
    return this.httpClient.get<Ilce[]>(newPath);   
  }
}
