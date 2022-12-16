import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonelbasvuruComponent } from './Components/personelbasvuru/personelbasvuru.component';
import { PersonelDtoComponent } from './Components/personeldto/personeldto.component';
import { SehirComponent } from './Components/sehir/sehir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IlceComponent } from './Components/ilce/ilce.component';
import { PersonelAddComponent } from './Components/personel-add/personel-add.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './Components/nav/nav.component';
import { BasvuruAddComponent } from './Components/basvuru-add/basvuru-add.component';




@NgModule({
  declarations: [
    AppComponent,    
    PersonelbasvuruComponent,
    PersonelDtoComponent,
    SehirComponent,
    IlceComponent,
    PersonelAddComponent,
    NavComponent,
    BasvuruAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
