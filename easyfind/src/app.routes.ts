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
import { RealStateComponent } from './app/components/real-state/real-state.component';
import { HotelsComponent } from './app/components/hotels/hotels.component';
import { LoginComponent } from './app/components/login/login.component';
import { RestaurantsComponent } from './app/components/restaurants/restaurants.component';
import { GymComponent } from './app/components/gym/gym.component';
import { HomeDecoreComponent } from './app/components/home-decore/home-decore.component';
import { AddNewComponent } from './app/components/add-new/add-new.component';
import { LogoutComponent } from './app/components/logout/logout.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            // { path: '', component: Dashboard },
            { path: '', component: DashBoardComponent },
            { path: 'login', component: LoginComponent, data: { title: 'Login Components' } },
            { path: 'logout', component: LogoutComponent, data: { title: 'Logout Components' } },
            { path: 'doctors', component: DoctorsComponent, data: { title: 'Doctors Components' } },
            { path: 'doctors-search', component: DoctorsSearchComponent, data: { title: 'Doctors Components' } },
            { path: 'real-state', component: RealStateComponent, data: { title: 'Real State Components' } },
            { path: 'hotels', component: HotelsComponent, data: { title: 'Hotels Components' } },
            { path: 'restaurants', component: RestaurantsComponent, data: { title: 'Restaurants Components' } },
            { path: 'homeDecore', component: HomeDecoreComponent, data: { title: 'HomeDecore Components' } },
            { path: 'addNew', component: AddNewComponent, data: { title: 'Add new' } },
            { path: 'gym', component: GymComponent, data: { title: 'Gym Components' } },
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
