import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  constructor(private http:HttpClient) { }
  getTokens(obj:any){
    return this.http.post("http://localhost:4300/users/login",obj)
  }
  checkJWT(token:any){
    const data=jwtDecode(token)
    if(data.exp)
      return data.exp<Math.floor(Date.now()/1000);
    else
      return true;
  }
}
