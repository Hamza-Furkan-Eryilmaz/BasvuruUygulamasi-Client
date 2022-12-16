import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PersonelIsBasvurusuDto } from 'src/app/Models/PersoneIsBasvurusuDto';
import { PersonelbasvuruService } from 'src/app/Services/personelbasvuru.service';


@Component({
  selector: 'app-personelbasvuru',
  templateUrl: './personelbasvuru.component.html',
  styleUrls: ['./personelbasvuru.component.css']
})
export class PersonelbasvuruComponent implements OnInit {

  @Input() personelId:number;
  
  basvurular:PersonelIsBasvurusuDto[]=[];

  constructor(private personelBasvuruService:PersonelbasvuruService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["personelId"]) {
        this.getByPersonelId(params["personelId"])
      }
     

    })
  }

  getByPersonelId(personelId:number)
  {
    this.personelBasvuruService.getByPersonelId(personelId).subscribe(response=>
      {
        this.basvurular=response
      })
  }

  
}
