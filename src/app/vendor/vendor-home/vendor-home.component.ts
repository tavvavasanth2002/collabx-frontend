
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  username = 'Vendor';
  stats = [
    { title: 'Total Projects', value: 5 },
    { title: 'Active', value: 2 },
    { title: 'Completed', value: 2 },
    { title: 'Pending', value: 1 }
  ];

  messages = [
    { sender: 'MNC Team', text: 'Please update project status for Alpha App.' },
    { sender: 'MNC Manager', text: 'Upload today’s daily report by 6 PM.' },
    { sender: 'System', text: 'Server maintenance scheduled tonight.' }
  ];

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    const ctx = document.getElementById('vendorChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Active', 'Completed', 'Pending'],
        datasets: [{
          data: [2, 2, 1],
          backgroundColor: ['#28a745', '#007bff', '#ffc107']
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