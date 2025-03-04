import { Component, OnInit } from '@angular/core';
import { DoctorsSearchService } from '../../service/doctors-search.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors-search',
  imports: [DropdownModule,FormsModule ,CommonModule ],
  templateUrl: './doctors-search.component.html',
  styleUrl: './doctors-search.component.scss'
})
export class DoctorsSearchComponent implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  specializations: string[] = [];
  selectedSpecialization: string = '';

  constructor(private doctorService: DoctorsSearchService) {}

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(response => {
      this.doctors = response.doctors;
      this.filteredDoctors = [...this.doctors];
      this.extractSpecializations();
    });
  }

  extractSpecializations() {
    const specializationsSet = new Set(this.doctors.map(doctor => doctor.specialization));
    this.specializations = Array.from(specializationsSet);
  }

  filterDoctors() {
    if (this.selectedSpecialization) {
      this.filteredDoctors = this.doctors.filter(doctor => 
        doctor.specialization === this.selectedSpecialization
      );
    } else {
      this.filteredDoctors = [...this.doctors];
    }
  }

}
