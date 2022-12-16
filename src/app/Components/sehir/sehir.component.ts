import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sehir } from 'src/app/Models/Sehir';
import { SehirService } from 'src/app/Services/sehir.service';

@Component({
  selector: 'app-sehir',
  templateUrl: './sehir.component.html',
  styleUrls: ['./sehir.component.css']
})
export class SehirComponent implements OnInit {

  sehirler:Sehir[]=[];

constructor(private sehirService:SehirService,
  private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getSehirler();
  }


  getSehirler(){

    this.sehirService.getAll().subscribe(response=>{
      this.sehirler=response;
    })
  }

}
