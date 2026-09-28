import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MetaService } from '../../service/meta.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  users = [
    { id: 1, firstName: 'Prasad', lastName: 'Jwalapuram', username: 'prasad.jwalapuram', token: 'xRGO9SlRR72Jj2EKpFgmxGs8bT5guarbO82i0OCSacdhfg4bVoGAGDyVobEgXfEFEw1epDGW8FX5p7TSglemLVd9tLh0vvUG713' },
  ];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private metaService: MetaService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Login',
      description: '',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/login',
      type: 'website'
    });
  }

  login(): void {
    const loggedInData = this.users.find(x => x.username === this.loginForm.controls['username'].value);
    if (loggedInData && this.loginForm.controls['password'].value === 'Prithvi@67') {
      // localStorage.setItem('token', loggedInData.token);
      this.authService.loginService(loggedInData.token);
      localStorage.setItem('First Name', loggedInData.firstName);
      localStorage.setItem('Last Name', loggedInData.lastName);
      this.router.navigate(['/blog/list']);
    }
  }

}
