import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reportForm:FormGroup=new FormGroup("")
  constructor(private fb:FormBuilder,private bs:ActivatedRoute,private db:DashboardService){
    
  }
  result:any;
  email:any;
  submitNow(){
    this.reportForm.value.date=Date()
    this.db.sendNotification(this.reportForm.value).subscribe((data)=>{
    this.result=data;
    alert(this.result.message)
    this.reportForm.reset()
    })
  }
  ngOnInit(){
    this.email=sessionStorage.getItem("email");
    console.log(this.email)
    if(this.email)
      this.reportForm.patchValue({fromemail:this.email});
    this.reportForm=this.fb.group({
      fromemail:[`${this.email}`,Validators.required],
      toemail:["",Validators.required],
      subject:["",Validators.required],
      projectName:["",Validators.required],
      message:["",Validators.required],
      issues:["",Validators.required],
      tasks:["",Validators.required],
      date:["",Validators.required]
    })
  }
  

}

