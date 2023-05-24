import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';

import { DefaultComponent } from './dashboards/default/default.component';

import { ServicesComponent } from './consulter/services/services.component';
import { CongesComponent } from './mes-conges/conges/conges.component';
import { AutorisationsComponent } from './mes-autorisations/autorisations/autorisations.component';


const routes: Routes = [
  { path: '', redirectTo: 'login' },
 
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },

  
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },


 
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },


   { path: 'mes-conges', loadChildren: () => import('./mes-conges/mes-conges.module').then(m => m. MesCongesModule) },
   { path: 'mes-autorisations', loadChildren: () => import('./mes-autorisations/mes-autorisations.module').then(m => m.MesAutorisationsModule) },
   { path: 'consulter', loadChildren: () => import('./consulter/consulter.module').then(m => m. ConsulterModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },

  
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
  { path: 'administrer', loadChildren: () => import('./administrer/administrer.module').then(m => m.AdministrerModule) },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
