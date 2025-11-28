import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.css'
})
export class AllprojectsComponent {
   company:any;
    undecided:any[]=[]
    completed:any[]=[]
    reject:any[]=[]
    progress:any[]=[]
    value:any;
    constructor(private db:ParentService,private bs:ActivatedRoute){}
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
    sortBy: string = '';
sortDirection: boolean = true; // true = ascending, false = descending

sortTable(type: string, list: any[]) {
  this.sortBy = type;
  this.sortDirection = !this.sortDirection;

  list.sort((a, b) => {
    const x = a[type];
    const y = b[type];

    if (x < y) return this.sortDirection ? -1 : 1;
    if (x > y) return this.sortDirection ? 1 : -1;
    return 0;
  });
}

}
