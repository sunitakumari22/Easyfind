import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorsSearchService } from '../../service/doctors-search.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Skeleton } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-doctors-search',
  imports: [DropdownModule,FormsModule ,CommonModule ,ToastModule,Skeleton,ButtonModule ],
  providers:[MessageService],
  templateUrl: './doctors-search.component.html',
  styleUrl: './doctors-search.component.scss'
})
export class DoctorsSearchComponent implements OnInit {
  @ViewChild('searchInput', { static: false }) searchInput: any;
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  specializations: string[] = [];
  selectedSpecialization: string = '';
  isloading:boolean=false;
  isDisplay:boolean=false;
  isLoggedIn: boolean = false; 

  constructor(private doctorService: DoctorsSearchService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.isloading=true;
    this.isDisplay=true
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
        this.isloading=false;
      });
    });
  }
 

  handleAddNew() {
    const user = localStorage.getItem('loggedInUser');  
    if (user) {
        this.router.navigate(['/newDoctors']); 
    } else {
        
        // this.router.navigate(['/login']);
        this.messageService.add({
          severity: 'warn',
          summary: 'Access Denied',
          detail: 'If you are an admin, please log in first.',
          life: 3000
      });
    }
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
    if (this.filteredDoctors.length === 0) {
        this.messageService.add({ 
            severity: 'info', 
            summary: 'No Data', 
            detail: 'No doctors available for the selected specialization.', 
            life: 3000 
        });
    }
}


}
