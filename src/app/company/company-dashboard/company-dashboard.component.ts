import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  
  constructor(private router: Router) {}

  logout() {
    
    localStorage.removeItem('loggedCompany');
    this.router.navigate(['/home']);
  }
}