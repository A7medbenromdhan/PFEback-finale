// mes-autorisations.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorisationsComponent } from './autorisations/autorisations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MesAutorisationsRoutingModule } from './mes-autorisations-routing.module';

@NgModule({
  declarations: [AutorisationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MesAutorisationsRoutingModule, // Update this import
  ]
})
export class MesAutorisationsModule { } // Update the class name
