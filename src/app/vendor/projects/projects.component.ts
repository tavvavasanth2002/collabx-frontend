import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  company:any;
  undecided:any[]=[]
  completed:any[]=[]
  reject:any[]=[]
  progress:any[]=[]
  value:any;
  constructor(private db:DashboardService,private bs:ActivatedRoute){}
  ngOnInit(){
    this.company=this.bs.snapshot.paramMap.get('comp')
    if(this.company){
      this.load(this.company)
    }
  };
  load(company:any){
    this.db.undecidedProjects(this.company).subscribe(data=>{
      this.undecided=data
    })
    this.db.completedProjects(this.company).subscribe(data=>{
      this.completed=data;
    })
    this.db.progressProjects(this.company).subscribe(data=>{
      this.progress=data
    })
    this.db.rejectProjects(this.company).subscribe(data=>{
      this.reject=data;
    })
  }
  result:any;
  updateNow(data:any){
    data.projectStatus=this.value;
    
    this.db.updateprojects(data,data.projectName).subscribe((i)=>{
      this.result=i;
      alert(this.result.message)
      this.ngOnInit()
    })
  }
}
