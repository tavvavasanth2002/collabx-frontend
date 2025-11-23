import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../../services/parent.service';
import Swal from 'sweetalert2';

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
      projectStatus:["undecided",Validators.required],
      projectTime:["",Validators.required],
      projectPriority:["",Validators.required],
      vendorCompany:["",Validators.required],
      parentCompany:[this.company,Validators.required]
    })
  }
  result:any;
  companies:any
  ngOnInit(){
    this.parent.listCompany().subscribe((data)=>{
      this.companies=data
    })
  }
  addProject(){
    this.parent.addProjects(this.projectForm.value).subscribe((data)=>{
      this.result=data;
      Swal.fire({
  title: "Sweet!",
  text: this.result.message,
  imageUrl: "\assets\Copilot_20251111_224409.png",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});
    })
  }
}
