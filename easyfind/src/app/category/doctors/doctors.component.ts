import { Component, signal } from '@angular/core';
import { SharedModule } from '../shared.module';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DoctorsService } from '../../service/doctors.service';
import { Doctors } from '../../models/doctors';
import { SearchLocationService } from '../../service/search-location.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctors',
  imports: [SharedModule,IconFieldModule,InputIconModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  layout: string = 'grid';
  location:string=''

  products = signal<any>([]);

  options = ['list', 'grid'];

  constructor(private productService: DoctorsService,
    private searchLocation: SearchLocationService,
    private router: Router
  ) {}

  ngOnInit() {
      this.productService.getProducts().then((data) => {
        const length=data.length
          this.products.set([...data.slice(0,length)]);
      });
      this.getLocation();
  }
  getLocation(){
    this.searchLocation.getLocation().subscribe(data => {
        this.location=data.city;

    })}

    fetchDoctorsBySpecialization(Specialization:string){
      if (Specialization) {
        this.router.navigateByUrl(`/doctors-search`);
      }
    }

 

}
