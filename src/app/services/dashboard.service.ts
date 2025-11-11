import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  completedProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/completedProjects/${company}`)
  }
  progressProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/progressProjects/${company}`)
  }
  rejectProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/rejectProjects/${company}`)
  }
  undecidedProjects(company:any){
    return this.http.get<any[]>(`http://localhost:4300/undecidedProjects/${company}`)
  }
  returnEmail(email:any,page:any,limit:any){
    return this.http.get(`http://localhost:4300/returnemail/${email}?page=${page}&limit=${limit}`)
  }
  updateprojects(obj:any,name:any){
    return this.http.put(`http://localhost:4300/updateProject/${name}`,obj)
  }
  sendNotification(obj:any){
    return this.http.post('http://localhost:4300/sendNotification',obj)
  }
  sentmail(email:any){
    return this.http.get(`http://localhost:4300/emailNotification/${email}`)
  }
}
