import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { NavbarComponent } from './vendor/navbar/navbar.component';
import { ProjectsComponent } from './vendor/projects/projects.component';
import { ReportsComponent } from './vendor/reports/reports.component';
import { SentnotificationsComponent } from './vendor/sentnotifications/sentnotifications.component';
import { authGuard } from './auth.guard';


  
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'users',
    component: NavbarComponent,
    children: [
      { path: ':comp', component: DashboardComponent ,canActivate:[authGuard]},
      { path: 'dashboard/:comp', component: DashboardComponent ,canActivate:[authGuard]},
      { path: 'project/:comp', component: ProjectsComponent ,canActivate:[authGuard]},
      { path: 'reports/:comp', component: ReportsComponent ,canActivate:[authGuard]},
      { path: 'sentmail/:comp', component: SentnotificationsComponent, canActivate:[authGuard]}
    ],
  },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
