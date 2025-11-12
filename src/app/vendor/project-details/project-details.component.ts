
import { Component } from '@angular/core';
import { ProjectService } from '../../company/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  projects: any[] = [];
  selected: any = {};

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAll().subscribe(data => this.projects = data);
  }

  selectProject(p: any) {
    this.selected = p;
  }
}