
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects: any[] = [];

  addProject(p: any) {
    this.projects.push(p);
  }

  getAll() {
    return of(this.projects);
  }
}