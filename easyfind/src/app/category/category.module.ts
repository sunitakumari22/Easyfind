
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors/doctors.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DoctorsCategoryComponent } from './doctors-category/doctors-category.component';
@NgModule({
    imports: [
        CommonModule,
    DoctorsComponent,
    ToolbarModule,
    DoctorsCategoryComponent
],
    declarations: [
        
    ],
    providers: [
        DoctorsComponent
    ],
    exports: [
        DoctorsComponent,
        DoctorsCategoryComponent
    ]
})
export class CategoryModule {
}