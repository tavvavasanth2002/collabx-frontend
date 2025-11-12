import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { VendorComparisionComponent } from './vendor-comparision/vendor-comparision.component';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { VendorComparisonComponent } from './vendor-comparison/vendor-comparison.component';
import { CompanyHomeComponent } from './company-home/company-home.component';



@NgModule({
  declarations: [
    CompanyDashboardComponent,
    AddProjectComponent,
    VendorComparisionComponent,
    IssueReportComponent,
    VendorComparisonComponent,
    CompanyHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
