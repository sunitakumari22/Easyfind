import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
// import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { DashBoardComponent } from './app/dash-board/dash-board.component';
import { DoctorsComponent } from './app/category/doctors/doctors.component';
import { DoctorsCategoryComponent } from './app/category/doctors-category/doctors-category.component';
import { DoctorsSearchComponent } from './app/components/doctors-search/doctors-search.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            // { path: '', component: Dashboard },
            { path: '', component: DashBoardComponent },
            { path: 'doctors', component: DoctorsComponent, data: { title: 'Doctors Components' } },
            { path: 'doctors-search', component: DoctorsSearchComponent, data: { title: 'Doctors Components' } },
            { path: 'doctors-categories', component: DoctorsCategoryComponent, data: { title: 'Doctors Components' } },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
