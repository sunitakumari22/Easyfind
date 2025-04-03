import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../service/auth.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-logout',
  imports: [ 
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
  ToastModule, DialogModule],
    providers: [ConfirmationService, MessageService,Location],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  logoutDialog: boolean = true;
  changeColor: boolean = true;

  constructor(private authenticationService: AuthService,
    private router: Router,private location: Location ) { }

  ngOnInit(): void {  }
  onClickYes(){
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
  onClickNo(){
    this.location.back();
  }
}
