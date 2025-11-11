import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent {
  status: string | null = null;
  projects: any;
  company: string | null = null;

  constructor(private bs: ActivatedRoute, private db: DashboardService) {}

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
