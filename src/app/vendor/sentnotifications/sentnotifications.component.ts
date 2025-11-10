import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-sentnotifications',
  templateUrl: './sentnotifications.component.html',
  styleUrl: './sentnotifications.component.css'
})

export class SentnotificationsComponent {
  selectedNotification={
    fromemail:"",
    toemail:"",
    subject:"",
    projectName:"",
    message:"",
    priorty:"",
    tasks:"",
    issues:"",
    date:""
  }
  constructor(private bs:ActivatedRoute,private db:DashboardService){}
  company=this.bs.snapshot.paramMap.get('comp')
  email:any;
  result:any;
  ngOnInit(){
   this.email=sessionStorage.getItem("email")
   console.log(this.email)
   this.db.sentmail(this.email).subscribe((data)=>{
    this.result=data
    console.log(this.result)
   })
  }
  openModal(data: any) {
    this.selectedNotification = {...data};
  }
}
