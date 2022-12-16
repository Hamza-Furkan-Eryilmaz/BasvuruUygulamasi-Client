import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Sehir } from 'src/app/Models/Sehir';
import { PersonelbasvuruService } from 'src/app/Services/personelbasvuru.service';
import { SehirService } from 'src/app/Services/sehir.service';

@Component({
  selector: 'app-basvuru-add',
  templateUrl: './basvuru-add.component.html',
  styleUrls: ['./basvuru-add.component.css']
})
export class BasvuruAddComponent {
  
   @Input() personelId:number

  basvuruAddForm:FormGroup
  sehirler:Sehir[]=[];


  constructor(private personelBasvuruService:PersonelbasvuruService,
               private activatedRoute:ActivatedRoute,
               private sehirService:SehirService,
               private formBuilder:FormBuilder){
              
               }

  ngOnInit(): void {
   this.createBasvuruAddForm();
   this.getSehirlerDropdown();
  }

  createBasvuruAddForm()
  {
    this.basvuruAddForm=this.formBuilder.group({

      personelId:["",Validators.required],
      basvuruTarihi:["",Validators.required],
      seyahatEngeliYok:["",Validators.required],
      sehirId:["",Validators.required],
      pozisyon:["",Validators.required],
      isYeriAdi:["",Validators.required],
      aciklama:["",Validators.required]

      
    })
  }

  add()
  {
    if (this.basvuruAddForm.valid) {
      let basvuruModel =Object.assign({},this.basvuruAddForm.value) ;
      this.personelBasvuruService.add(basvuruModel).subscribe(response=>{
        alert("Başvuru eklendi!")
      })
    }
  }

  getSehirlerDropdown()
  {
    this.sehirService.getAll().subscribe(response=>{
      this.sehirler=response;

    })
  }

 

}

