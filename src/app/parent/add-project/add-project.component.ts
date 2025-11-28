import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ParentService } from '../../services/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']   // corrected plural
})
export class AddProjectComponent {
  projectForm!: FormGroup;
  result: any;
  companies: any;
  company = sessionStorage.getItem("company");

  constructor(private fb: FormBuilder, private parent: ParentService) {
    this.projectForm = this.fb.group({
      projectName: ["", Validators.required],
      projectDescription: ["", Validators.required],
      projectStatus: ["undecided", Validators.required],
      projectTime: ["", Validators.required],
      projectPriority: ["", Validators.required],
      vendorCompany: ["", Validators.required],
      parentCompany: [this.company, Validators.required],
      tasks: this.fb.array([])   // 🔑 FormArray for tasks
    });
  }

  ngOnInit() {
    this.parent.listCompany().subscribe((data) => {
      this.companies = data;
    });
  }

  // Getter for tasks FormArray
  get tasks(): FormArray {
    return this.projectForm.get("tasks") as FormArray;
  }

  // Add a new task group
  addTask() {
    const taskGroup = this.fb.group({
      taskName: ["", Validators.required],
      taskDescription: ["", Validators.required],
      taskPriority: ["", Validators.required],
      taskProject: [this.projectForm.value.projectName, Validators.required]
    });
    this.tasks.push(taskGroup);
  }

  // Remove a task by index
  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  // Submit project with tasks
  addProject() {
    this.parent.addProjects(this.projectForm.value).subscribe((data) => {
      this.result = data;
      Swal.fire({
        title: "Sweet!",
        text: this.result.message,
        imageUrl: "assets/Copilot_20251111_224409.png", // fixed slashes
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    });
  }
}
