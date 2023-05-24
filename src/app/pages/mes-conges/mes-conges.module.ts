// mes-conges.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongesComponent } from './conges/conges.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MesCongesRoutingModule } from './mes-conges-routing.module';

@NgModule({
  declarations: [CongesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MesCongesRoutingModule, // Update this import
  ]
})
export class MesCongesModule { } // Update the class name
