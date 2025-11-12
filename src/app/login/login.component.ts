import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  reqpwd: any;

  checkLogin() {
    this.reqpwd = this.loginForm.value.username.slice(0, 3) + '123';

    if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === '12345') {
      alert('Login success (MNC)');
      localStorage.setItem('adminloggedin', JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('/company/dashboard');
    }
    else if (this.loginForm.value.password === this.reqpwd) {
      alert('Login success (Vendor)');
      localStorage.setItem('userloggedin', JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('/vendor/dashboard');
    }
    else {
      alert('Login failed');
      this.loginForm.reset();
    }
  }

  cancel() {
    this.loginForm.reset();
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}