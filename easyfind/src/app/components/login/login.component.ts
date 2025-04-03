import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,ToastModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  users: any[] = [];
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,
    private messageService: MessageService,
  ) {
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
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Invalid email or password',
            life: 3000
        });
          this.errorMessage = 'Invalid email or password';
        }
      },
      () => this.errorMessage = 'Login failed'
    );
  }

}
