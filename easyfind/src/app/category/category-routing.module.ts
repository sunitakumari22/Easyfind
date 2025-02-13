
import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { SharedModule } from 'primeng/api';
import { DoctorsComponent } from './doctors/doctors.component';


const routes: Routes = [
    {
        path: '', component: DashBoardComponent,

        children: [
            { path: '/doctors', component: DoctorsComponent, data: { title: 'Doctors Components' } },
            // { path: 'UnauthorizedAccess', component: UnauthorizedAccessComponent, data: { title: 'UnauthorizedAccess' } },
            // { path: 'ForbiddenAccess', component: ForbiddenAccessComponent, data: { title: 'ForbiddenAccess' } },
            // { path: 'InternalServerError', component: InternalServerErrorComponent, data: { title: 'InternalServerError' } },
            // { path: 'LoginTokenExpired', component: LoginTokenExpiredComponent, data: { title: 'LoginTokenExpired' } },

            
        ]
    }
]

@NgModule({
    imports: [  RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcademicsRoutingModule {
}