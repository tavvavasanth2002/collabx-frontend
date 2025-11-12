import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent {
  
  constructor(private router: Router) {}

  logout() {
    // Remove vendor login and go to login page
    localStorage.removeItem('loggedVendor');
    this.router.navigate(['/home']);
  }
}   
