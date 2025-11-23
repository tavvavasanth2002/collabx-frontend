import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { DashboardService } from '../../services/dashboard.service';
import { forkJoin } from 'rxjs';

interface Company {
  companyName: string;
  email: string;
  phone: string;
  undecided: number;
  progress: number;
  completed: number;
  reject: number;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  listCompany: any
  alldetails: Company[] = [];

  constructor(private parent: ParentService, private child: DashboardService) {}

  ngOnInit() {
    this.parent.listCompany().subscribe((companies) => {
      this.listCompany = companies;

      this.listCompany.forEach((c:any) => {
        forkJoin({
          undecided: this.child.undecidedProjects(c.companyName),
          completed: this.child.completedProjects(c.companyName),
          reject: this.child.rejectProjects(c.companyName),
          progress: this.child.progressProjects(c.companyName)
        }).subscribe((results) => {
          console.log(c.companyName)
          const company: Company = {
            companyName: c.companyName,
            email: c.email,
            phone: c.phone,
            undecided: results.undecided.length,
            completed: results.completed.length,
            reject: results.reject.length,
            progress: results.progress.length
          };
          this.alldetails.push(company);
          
        });
      });
    });
  }
}
