import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl("/")
        sessionStorage.clear()
      }
    });
    
  }
}
