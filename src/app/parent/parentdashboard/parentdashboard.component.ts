import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { LoginservicesService } from '../../services/loginservices.service';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-parentdashboard',
  templateUrl: './parentdashboard.component.html',
  styleUrl: './parentdashboard.component.css'
})
export class ParentdashboardComponent {
user: any;
  company: any;
  undecided: any[] = [];
  completed: any[] = [];
  reject: any[] = [];
  progress: any[] = [];
  notification: any;

  selectedNotification = {
    fromemail: "",
    toemail: "",
    subject: "",
    projectName: "",
    message: "",
    priorty: "",
    tasks: "",
    issues: "",
    date: ""
  };

  pieChartType: ChartType = 'pie';
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Completed', 'In Progress', 'Rejected'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545']
      }
    ]
  };

  constructor(
    private log: LoginservicesService,
    private bs: ActivatedRoute,
    private db: ParentService
  ) {}

  ngOnInit() {
    this.company = this.bs.snapshot.paramMap.get('comp');

    if (this.company) {
      this.load(this.company);
    }

    const email = sessionStorage.getItem("email");
    if (email) {
      this.db.returnEmail(email,this.page,this.limit).subscribe((data) => {
        this.notification = data;
        if(this.notification.length==0){
          this.page--;
          this.ngOnInit();
        }
      });
    }
  }

  load(company: any) {
    this.db.undecidedProjects(this.company).subscribe(data => {
      this.undecided = data;
    });

    this.db.completedProjects(this.company).subscribe(data => {
      this.completed = data;
      this.updateChart();
    });

    this.db.progressProjects(this.company).subscribe(data => {
      this.progress = data;
      this.updateChart();
    });

    this.db.rejectProjects(this.company).subscribe(data => {
      this.reject = data;
      this.updateChart();
    });
  }

  updateChart() {
    this.pieChartData = {
      labels: ['Completed', 'In Progress', 'Rejected'],
      datasets: [
        {
          data: [
            this.completed.length,
            this.progress.length,
            this.reject.length
          ],
          backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }
      ]
    };
  }

  openModal(data: any) {
    this.selectedNotification = { ...data };
  }
  page=1;
  limit=5;
  prev(){
    this.page--;
    this.ngOnInit()
  }
  next(){
    this.page++;
    this.ngOnInit();
  }
}
