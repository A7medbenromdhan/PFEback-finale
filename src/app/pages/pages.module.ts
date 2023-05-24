import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';

import { ProjectsModule } from './projects/projects.module';

import { UtilityModule } from './utility/utility.module';
import { MesCongesModule } from './mes-conges/mes-conges.module';
import { MesAutorisationsModule } from './mes-autorisations/mes-autorisations.module';
import { ConsulterModule } from './consulter/consulter.module';

import { TablesModule } from './tables/tables.module';
import { ManagerModule } from './manager/manager.module';
import { AdministrerModule } from './administrer/administrer.module';

import { CalendarComponent } from './calendar/calendar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CongesComponent } from './mes-conges/conges/conges.component';
import { AutorisationsComponent } from './mes-autorisations/autorisations/autorisations.component';
import { ServicesComponent } from './consulter/services/services.component';















FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [CalendarComponent,      ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    
    
    HttpClientModule,
    ProjectsModule,
    UIModule,
  
    UtilityModule,
   
    TablesModule,
    ManagerModule,
    AdministrerModule,
    WidgetModule,
   
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SimplebarAngularModule,
    LightboxModule
  ],
})
export class PagesModule { }
