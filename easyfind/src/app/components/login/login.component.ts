import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  users: any[] = [];
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    this.authService.getUsers(username, password ).subscribe(
      success => {
        if (success) {
          localStorage.setItem('loggedInUser', JSON.stringify(success));
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      () => this.errorMessage = 'Login failed'
    );
  }

}
