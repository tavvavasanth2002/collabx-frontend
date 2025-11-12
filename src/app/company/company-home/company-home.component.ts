import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  username = 'Company MNC';
  stats = [
    { title: 'Total Projects', value: 8 },
    { title: 'Active Projects', value: 4 },
    { title: 'Completed Projects', value: 3 },
    { title: 'Pending Projects', value: 1 }
  ];

  messages = [
    { sender: 'Startup Team', text: 'Project Alpha build complete.' },
    { sender: 'Vendor NovaTech', text: 'Requested access to documentation.' },
    { sender: 'System', text: 'New vendor joined your workspace.' }
  ];

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    const ctx = document.getElementById('companyChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Active', 'Completed', 'Pending'],
        datasets: [{
          data: [4, 3, 1],
          backgroundColor: ['#007bff', '#28a745', '#ffc107']
        }]
      },
      options: {
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}