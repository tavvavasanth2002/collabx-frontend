
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent {
  reportForm: FormGroup;
  reports: any[] = [];

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      project: [''],
      summary: [''],
      progress: ['']
    });
  }

  submitReport() {
    this.reports.push(this.reportForm.value);
    alert('Report sent to MNC!');
    this.reportForm.reset();
  }
}