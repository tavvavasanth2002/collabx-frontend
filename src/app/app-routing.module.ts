

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { AddProjectComponent } from './company/add-project/add-project.component';
import { VendorComparisonComponent } from './company/vendor-comparison/vendor-comparison.component';
import { IssueReportComponent } from './company/issue-report/issue-report.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { ProjectDetailsComponent } from './vendor/project-details/project-details.component';
import { IssuesFeedbackComponent } from './vendor/issues-feedback/issues-feedback.component';
import { DailyReportComponent } from './vendor/daily-report/daily-report.component';
import { CompanyHomeComponent } from './company/company-home/company-home.component';
import { VendorHomeComponent } from './vendor/vendor-home/vendor-home.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  
  
{
  path: 'company',
  component: CompanyDashboardComponent, 
  children: [
    { path: 'dashboard', component: CompanyHomeComponent }, 
    { path: 'add', component: AddProjectComponent },
    { path: 'compare', component: VendorComparisonComponent },
    { path: 'issues', component: IssueReportComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
},
  
  {
  path: 'vendor',
  component: VendorDashboardComponent, 
  children: [
    { path: 'dashboard', component: VendorHomeComponent },  
    { path: 'projects', component: ProjectDetailsComponent },
    { path: 'issues', component: IssuesFeedbackComponent },
    { path: 'report', component: DailyReportComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
},
{
  path:'about',component:AboutComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
