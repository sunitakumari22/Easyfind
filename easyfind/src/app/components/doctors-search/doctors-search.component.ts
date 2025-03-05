import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorsSearchService } from '../../service/doctors-search.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors-search',
  imports: [DropdownModule,FormsModule ,CommonModule ],
  templateUrl: './doctors-search.component.html',
  styleUrl: './doctors-search.component.scss'
})
export class DoctorsSearchComponent implements OnInit {
  @ViewChild('searchInput', { static: false }) searchInput: any;
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  specializations: string[] = [];
  selectedSpecialization: string = '';

  constructor(private doctorService: DoctorsSearchService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedSpecialization = params['specialization'] || '';
  
      this.doctorService.getDoctors().subscribe(response => {
        console.log(this.selectedSpecialization,"here");
        this.doctors = response;
        console.log(this.doctors);
        
        this.filteredDoctors = [...this.doctors];
        this.extractSpecializations();
        if (this.selectedSpecialization) {
          this.filterDoctors();
        }
        console.log(this.filteredDoctors,"filter doctors");
        
      });
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
