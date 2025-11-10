import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  sidebarOpen = false;
  company: any;   // ✅ <-- THIS LINE IS CRITICAL

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.company=sessionStorage.getItem("company")
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  logOut(){
    this.router.navigateByUrl("/");
  }
}
