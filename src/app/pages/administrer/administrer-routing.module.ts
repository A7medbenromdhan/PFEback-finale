import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';
import { DemandesAutorisationsComponent } from './demandes-autorisations/demandes-autorisations.component';
import { GestionServicesComponent } from './gestion-services/gestion-services.component';
import { SanctionsComponent } from './sanctions/sanctions.component';
import { PersonnelesComponent } from './personneles/personneles.component';

const routes: Routes = [
  { path: 'demande-conges', component: DemandeCongesComponent },
  { path: 'demandes-autorisations', component: DemandesAutorisationsComponent },
  { path: 'gestion-services', component: GestionServicesComponent },
  { path: 'sanctions', component: SanctionsComponent } ,
  { path: 'personneles', component: PersonnelesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrerRoutingModule { }
