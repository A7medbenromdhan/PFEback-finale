import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorisationsComponent } from './autorisations/autorisations.component';
import { CongesComponent } from './conges/conges.component';

const routes: Routes = [
  { path: 'autorisations', component: AutorisationsComponent },
  { path: 'conges', component: CongesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
