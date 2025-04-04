import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AddNewService } from '../../service/add-new.service';
import { DoctorsSearchService } from '../../service/doctors-search.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-new-doctors',
  templateUrl: './new-doctors.component.html',
  styleUrl: './new-doctors.component.scss',
  imports: [ToastModule, ReactiveFormsModule, ButtonModule, TabViewModule, InputTextModule, DropdownModule],
  providers: [MessageService],
})
export class NewDoctorsComponent {
  hotelForm: FormGroup;
  isSubmitting = false;

  // Specialization List
  specializations = [
    { name: 'Ayurvedic Doctors' },
    { name: 'Chest Specialists' },
    { name: 'Dentist' },
    { name: 'Dietitians' },
    { name: 'Gastroenterologists' },
    { name: 'Homeopathic Doctors' },
    { name: 'Neurosurgeon' },
    { name: 'Ophthalmologists' },
    { name: 'Physiotherapists' },
    { name: 'Psychiatrist' },
    { name: 'Skin & Hair Doctors' },
    { name: 'Thyroid Doctors' },
    { name: 'Urologists' },
    { name: 'Bone & Joints Doctors' },
    { name: 'Child Specialist Doctors' },
    { name: 'Dermatologists' },
    { name: 'ENT Specialists' },
    { name: 'General Physicians' },
    { name: 'Neonatologists' },
    { name: 'Oncologists' },
    { name: 'Orthopaedic Doctors' },
    { name: 'Physiotherapists For Home Visit' },
    { name: 'Psychologists' },
    { name: 'Skin Doctors' },
    { name: 'Trichologists' },
    { name: 'Veterinary Doctors' },
    { name: 'Cardiologists' },
    { name: 'Cosmetic Surgeons' },
    { name: 'Diabetologists' },
    { name: 'Eye Specialists' },
    { name: 'Gynaecologists & Obstetricians' },
    { name: 'Neurologists' },
    { name: 'On Call Doctors' },
    { name: 'Paediatricians' },
    { name: 'Piles Doctors' },
    { name: 'Sexologists' },
    { name: 'Speech Therapists' },
    { name: 'Unani Doctors' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private addNewService: AddNewService,
    private doctorsService: DoctorsSearchService
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      reviews: [null, [Validators.required, Validators.min(1)]],
      specialization: ['', Validators.required], // Updated to store dropdown value
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
    const formData = { ...this.hotelForm.value, specialization: this.hotelForm.value.specialization.name || this.hotelForm.value.specialization };
    this.isSubmitting = true;

    this.doctorsService.postDoctors(formData).subscribe({
      next: (response) => {
        console.log("Submitting form:", this.hotelForm.value);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor data submitted successfully!' });
        this.hotelForm.reset();
        this.isSubmitting = false;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to submit doctor data!' });
        this.isSubmitting = false;
      }
    });
  }
}
