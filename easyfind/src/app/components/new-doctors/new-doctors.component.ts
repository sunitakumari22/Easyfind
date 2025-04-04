import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AddNewService } from '../../service/add-new.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-doctors',
imports: [ToastModule, ReactiveFormsModule,ButtonModule,TabViewModule,InputTextModule ],
  providers:[MessageService],
  templateUrl: './new-doctors.component.html',
  styleUrl: './new-doctors.component.scss'
})
export class NewDoctorsComponent {
   hotelForm: FormGroup;
    isSubmitting = false;
    
    constructor(
      private fb: FormBuilder, 
      private http: HttpClient,
      private messageService: MessageService,
      private addNewService:AddNewService
    ) {
      this.hotelForm = this.fb.group({
        name: ['', Validators.required],
        rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
        reviews: [null, [Validators.required, Validators.min(1)]],
        trust: [true],
        verified: [true],
        topSearch: [false],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        whatsappLink: ['', Validators.required],
        recentEnquiries: [null, [Validators.required, Validators.min(0)]],
        image: ['', Validators.required]
      });
    }
  
    submitForm() {
      if (this.hotelForm.invalid) {
        this.messageService.add({ severity: 'warn', summary: 'Validation Error', detail: 'Please fill all required fields correctly!' });
        return;
      }
  
      this.isSubmitting = true;
      
      
      this.addNewService.postHotel(this.hotelForm.value).subscribe({
        next: (response) => {
          console.log("Submitting form:", this.hotelForm.value);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Hotel data submitted successfully!' });
          this.hotelForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to submit hotel data!' });
          this.isSubmitting = false;
        }
      });
    }
  

}
