import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  projectForm:FormGroup=new FormGroup("")
  company=sessionStorage.getItem("company")
  constructor(private fb:FormBuilder,private parent:ParentService){
    this.projectForm=fb.group({
      projectName:["",Validators.required],
      projectDescription:["",Validators.required],
      projectTime:["",Validators.required],
      projectPriority:["",Validators.required],
      vendorCompany:["",Validators.required],
      parentCompany:[this.company,Validators.required]
    })
  }
}
