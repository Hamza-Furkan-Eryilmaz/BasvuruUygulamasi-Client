import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonelDto } from 'src/app/Models/PersonelDto';
import { PersonelService } from 'src/app/Services/personel.service';

@Component({
  selector: 'app-personel',
  templateUrl: './personeldto.component.html',
  styleUrls: ['./personeldto.component.css']
})
export class PersonelDtoComponent implements OnInit{

  personelDtos:PersonelDto[]=[];
  currentPersonelId:number;

  constructor(private personelService:PersonelService,
    private activatedRoute:ActivatedRoute){}
    
    ngOnInit():void{
      this.getPersonels();  
      
    }

  getPersonels()
  {
    this.personelService.getAll().subscribe(response=>{
      this.personelDtos=response
      console.log(this.personelDtos)
    });
     
    }

    setCurrentPersonel(id:number)
    {
      this.currentPersonelId=id
      console.log(this.currentPersonelId)   
    }

    getCurrentPersonelClass(id:number)
    {
      if (id==this.currentPersonelId) {
        return "table-primary"
      }
      else {
        return "table"
      }
    }
    
}

