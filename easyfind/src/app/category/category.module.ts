
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors/doctors.component';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
    imports: [
        CommonModule,
    DoctorsComponent,
    ToolbarModule
],
    declarations: [
        
    ],
    providers: [
        DoctorsComponent
    ],
    exports: [
        DoctorsComponent
    ]
})
export class CategoryModule {
}