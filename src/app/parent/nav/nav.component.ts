import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
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
      sessionStorage.clear()
      this.router.navigateByUrl("/");
    }
  
}
