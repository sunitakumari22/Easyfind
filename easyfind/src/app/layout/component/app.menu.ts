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
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
           
           
        ];
    }
}
