import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { NavbarComponent } from './vendor/navbar/navbar.component';
import { ProjectsComponent } from './vendor/projects/projects.component';
import { ReportsComponent } from './vendor/reports/reports.component';
import { SentnotificationsComponent } from './vendor/sentnotifications/sentnotifications.component';
import { authGuard } from './auth.guard';
import { ProjectStatusComponent } from './vendor/project-status/project-status.component';
import { NavComponent } from './parent/nav/nav.component';
import { ParentdashboardComponent } from './parent/parentdashboard/parentdashboard.component';
import { AddProjectComponent } from './parent/add-project/add-project.component';
import { CompanyComponent } from './parent/company/company.component';
import { ReturnMailsComponent } from './parent/return-mails/return-mails.component';
import { ReturnReportsComponent } from './parent/return-reports/return-reports.component';
import { AllprojectsComponent } from './parent/allprojects/allprojects.component';
import { StatusComponent } from './parent/status/status.component';


  
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
      { path: 'sentmail/:comp', component: SentnotificationsComponent, canActivate:[authGuard]},
      { path: 'projectStatus/:status', component:ProjectStatusComponent, canActivate:[authGuard]}
    ],
  },
  {path:"parent",component:NavComponent,
    children:[
      {path:':comp',component:ParentdashboardComponent},
      {path:'parentdashboard/:comp',component:ParentdashboardComponent},
      {path:'addProject/:comp',component:AddProjectComponent},
      {path:'company/:comp',component:CompanyComponent},
      {path:'returnmails/:comp',component:ReturnMailsComponent},
      {path:'returnreports/:comp',component:ReturnReportsComponent},
      {path:'allprojects/:comp',component:AllprojectsComponent},
      {path:'status/:status',component:StatusComponent}
    ]
  },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
