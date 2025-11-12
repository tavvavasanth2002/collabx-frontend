import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { IssuesFeedbackComponent } from './issues-feedback/issues-feedback.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';



@NgModule({
  declarations: [
    VendorDashboardComponent,
    ProjectDetailsComponent,
    IssuesFeedbackComponent,
    DailyReportComponent,
    VendorHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
