import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';
import { DemandesAutorisationsComponent } from './demandes-autorisations/demandes-autorisations.component';
import { GestionServicesComponent } from './gestion-services/gestion-services.component';
import { SanctionsComponent } from './sanctions/sanctions.component';
import { AdministrerRoutingModule } from './administrer-routing.module';
import { PersonnelesComponent } from './personneles/personneles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemandeCongesComponent,
    DemandesAutorisationsComponent,
    GestionServicesComponent,
    SanctionsComponent,
    PersonnelesComponent
  ],
  imports: [
    CommonModule,
    AdministrerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdministrerModule { }
