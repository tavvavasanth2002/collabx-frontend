import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
