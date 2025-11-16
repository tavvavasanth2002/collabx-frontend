import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }
  completedProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/parentCompletedProjects/${company}`)
  }
  progressProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/parentProgressProjects/${company}`)
  }
  rejectProjects(company:any)
  {
    return this.http.get<any[]>(`http://localhost:4300/parentRejectProjects/${company}`)
  }
  undecidedProjects(company:any){
    return this.http.get<any[]>(`http://localhost:4300/parentUndecidedProjects/${company}`)
  }
  returnEmail(email:any,page:any,limit:any){
    return this.http.get(`http://localhost:4300/emailNotification/${email}?page=${page}&limit=${limit}`)
  }
  updateprojects(obj:any,name:any){
    return this.http.put(`http://localhost:4300/updateProject/${name}`,obj)
  }
}
