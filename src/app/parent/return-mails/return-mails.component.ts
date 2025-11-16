import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-return-mails',
  templateUrl: './return-mails.component.html',
  styleUrl: './return-mails.component.css'
})
export class ReturnMailsComponent {
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
