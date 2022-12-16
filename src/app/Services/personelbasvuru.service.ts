import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonelIsBasvurusuDto } from '../Models/PersoneIsBasvurusuDto';
import { PersonelIsBasvurusuVM } from '../Models/PersonelIsBasvurusuVM';

@Injectable({
  providedIn: 'root'
})
export class PersonelbasvuruService {

  apiUrl="https://localhost:7017/api/";

  
  
  constructor(private httpClient:HttpClient) { }

  getByPersonelId(id:number):Observable<PersonelIsBasvurusuDto[]>{

    let newPath=this.apiUrl+"personelIsBasvurulari/GetByPersonelId?personelId="+id
    return this.httpClient.get<PersonelIsBasvurusuDto[]>(newPath);
  }

  add(basvuru:PersonelIsBasvurusuVM)
  {
    return this.httpClient.post(this.apiUrl+"personelIsBasvurulari/add",basvuru)
  }
  
 

  
}
