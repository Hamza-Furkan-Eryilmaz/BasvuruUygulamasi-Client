import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { PersonelDto } from '../Models/PersonelDto';
import{PersonelCreateVM} from '../Models/PersonelCreateVM';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  apiUrl="https://localhost:7017/api/";
  constructor(private httpClient:HttpClient) { }

  
  
 getAll():Observable<PersonelDto[]>
  {
    let newPath=this.apiUrl+"personeller/getall"
    return this.httpClient.get<PersonelDto[]>(newPath);   
  }

  add(personel:PersonelCreateVM)
  { 
    return this.httpClient.post(this.apiUrl+"personeller/add",personel)
  }

  getPersonelById(id:number):Observable<PersonelDto>
  {
    let newPath=this.apiUrl+"personeller/getById"
    return this.httpClient.get<PersonelDto>(newPath);   
  }

 

}
