import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginservicesService } from '../services/loginservices.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup=new FormGroup("");
  constructor(private fb:FormBuilder,private log:LoginservicesService,private router:Router){
    this.loginForm=fb.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  result:any;
  submitNow(){
    console.log(this.loginForm.value)
    this.log.getTokens(this.loginForm.value).subscribe((data)=>{
      this.result=data;
      if(this.result.token){
        if(this.result.role=="vendor"){
          sessionStorage.setItem("vendorLogin",this.result.token)
          sessionStorage.setItem("email",this.result.email);
          sessionStorage.setItem("company",this.result.company);
          let comp=this.result.company
          this.router.navigateByUrl(`/users/${comp}`)
          Swal.fire({
  title: "Welcome",
  text: "Vendor Login!",
  icon: "success"
});

        }
        else{
          sessionStorage.setItem("adminLogin",this.result.token)
          sessionStorage.setItem("email",this.result.email);
          sessionStorage.setItem("company",this.result.company);
          let comp=this.result.company;
          this.router.navigateByUrl(`/parent/${comp}`)
          Swal.fire({
  title: "Welcome",
  text: "Admin Login Success",
  icon: "success"
});
         
        }
      }
      else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: this.result.message,

});
      }
    })
    this.loginForm.reset();
  }
}
