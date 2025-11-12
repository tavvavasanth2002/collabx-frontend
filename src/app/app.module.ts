
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CompanyDashboardComponent,
    AddProjectComponent,
    VendorComparisonComponent,
    IssueReportComponent,
    VendorDashboardComponent,
    ProjectDetailsComponent,
    IssuesFeedbackComponent,
    DailyReportComponent,
    CompanyHomeComponent,
    VendorHomeComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}