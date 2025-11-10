import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './vendor/navbar/navbar.component';
import { NgChartsModule } from 'ng2-charts';
import { ReportsComponent } from './vendor/reports/reports.component';
import { ProjectsComponent } from './vendor/projects/projects.component';
import { IssuesComponent } from './vendor/issues/issues.component';
import { ProjectStatusComponent } from './vendor/project-status/project-status.component';
import { SentnotificationsComponent } from './vendor/sentnotifications/sentnotifications.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    ReportsComponent,
    ProjectsComponent,
    IssuesComponent,
    ProjectStatusComponent,
    SentnotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
