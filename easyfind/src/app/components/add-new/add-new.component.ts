import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Checkbox } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { AddNewService } from '../../service/add-new.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-new',
  imports: [ToastModule, ReactiveFormsModule,ButtonModule],
  providers:[MessageService],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})
export class AddNewComponent {
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
    
    
    this.addNewService.postHotel(this.hotelForm).subscribe({
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
