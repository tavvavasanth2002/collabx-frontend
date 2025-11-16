import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentdashboardComponent } from '../parentdashboard/parentdashboard.component';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
   status: string | null = null;
    projects: any;
    company: string | null = null;
  
    constructor(private bs: ActivatedRoute, private db: ParentService) {}
  
    ngOnInit() {
      this.status = this.bs.snapshot.paramMap.get("status");
      this.company = sessionStorage.getItem("company");
  
      switch (this.status) {
        case "complete":
          this.db.completedProjects(this.company).subscribe(data => this.projects = data);
          break;
        case "undecided":
          this.db.undecidedProjects(this.company).subscribe(data => this.projects = data);
          break;
        case "progress":
          this.db.progressProjects(this.company).subscribe(data => this.projects = data);
          break;
        case "reject":
          this.db.rejectProjects(this.company).subscribe(data => this.projects = data);
          break;
      }
    }
}
