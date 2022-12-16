import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelAddComponent } from './Components/personel-add/personel-add.component';
import { PersonelbasvuruComponent } from './Components/personelbasvuru/personelbasvuru.component';
import { PersonelDtoComponent } from './Components/personeldto/personeldto.component';





const routes: Routes = [
  {path:"",pathMatch:"full", component:PersonelDtoComponent},
  {path:"personeller/getall", component:PersonelDtoComponent},
  {path:"personelIsBasvurulari/getByPersonelId/:personelId", component:PersonelbasvuruComponent},
  {path:"personeller/add", component:PersonelAddComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
