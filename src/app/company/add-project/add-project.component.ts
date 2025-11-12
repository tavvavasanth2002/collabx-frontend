
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      vendor: ['', Validators.required],
      status: ['Pending', Validators.required],
      description: ['']
    });
  }

  addProject() {
    this.projectService.addProject(this.projectForm.value);
    alert('Project added successfully!');
    this.projectForm.reset();
  }
}