// mes-autorisations-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorisationsComponent } from './autorisations/autorisations.component';

const routes: Routes = [
  { path: '', component: AutorisationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesAutorisationsRoutingModule { } // Update the class name
