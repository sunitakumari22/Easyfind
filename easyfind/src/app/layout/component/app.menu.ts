import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];
    

    ngOnInit() {
        const isLoggedIn = !!localStorage.getItem('loggedInUser');
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Categories',
                items: [
                    { label: 'Doctors', icon: 'pi pi-fw pi-id-card', routerLink: ['/doctors'] },
                    { label: 'Real State', icon: 'pi pi-fw pi-check-square', routerLink: ['/real-state'] },
                    { label: 'Hotels', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/hotels'] },
                    { label: 'Restaurants', icon: 'pi pi-fw pi-table', routerLink: ['/restaurants'] },
                    { label: 'HomeDecore', icon: 'pi pi-fw pi-table', routerLink: ['/homeDecore'] },
                    { label: 'Beauty Spa', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Aashram', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Gym', icon: 'pi pi-fw pi-tablet', routerLink: ['/gym'] },
                    isLoggedIn
                    ? { label: 'Logout', icon: 'pi pi-fw pi-power-off', routerLink: ['/logout'] }
                    : { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
            
                    
                    
                ]
            },
           
           
        ];
    }
}
