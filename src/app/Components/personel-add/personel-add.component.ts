import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ilce } from 'src/app/Models/Ilce';
import { Sehir } from 'src/app/Models/Sehir';
import { IlceService } from 'src/app/Services/ilce.service';
import { PersonelService } from 'src/app/Services/personel.service';
import { SehirService } from 'src/app/Services/sehir.service';

@Component({
  selector: 'app-personel-add',
  templateUrl: './personel-add.component.html',
  styleUrls: ['./personel-add.component.css']
})
export class PersonelAddComponent {

    personelAddForm:FormGroup
    sehirler:Sehir[]=[];
    ilceler:Ilce[]=[];
    defaultGender='Erkek'
   
   
    genders=[
      {id:'1',value:'Erkek'},
      {id:'2',value:'Kadın'}
    ]

  constructor(private personelService:PersonelService,
    private activatedRoute:ActivatedRoute,
    private sehirService:SehirService,
    private ilceService:IlceService,
    private formBuilder:FormBuilder){}
    
    ngOnInit():void{

      this.getSehirlerDropdown();
      this.createPersonelAddForm();
     
      
      
 
    }

    createPersonelAddForm()
  {
    this.personelAddForm=this.formBuilder.group({

      sehirId:["",Validators.required],
      ilceId:["",Validators.required],
      adiSoyadi:["",Validators.required],
      cinsiyet:["",Validators.required],
      dogumTarihi:["",Validators.required],
      aciklama:[""]
    })
  }

  add()
  {
    if (this.personelAddForm.valid) {
      let personelModel =Object.assign({},this.personelAddForm.value) ;
      this.personelService.add(personelModel).subscribe(response=>{
        alert("Personel eklendi!")
      })
    }
  }

  getSehirlerDropdown()
  {
    this.sehirService.getAll().subscribe(response=>{
      this.sehirler=response;

    })
  }
  

  onChangeCity(sehirId:number)
  {
    if (sehirId) {
      this.ilceService.getBySehirId(sehirId).subscribe(response=>{
        this.ilceler=response;
    })
    }

  }

  

}
