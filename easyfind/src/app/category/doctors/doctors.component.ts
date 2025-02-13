import { Component, signal } from '@angular/core';
import { SharedModule } from '../shared.module';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DoctorsService } from '../../service/doctors.service';
import { Doctors } from '../../models/doctors';
import { SearchLocationService } from '../../service/search-location.service';


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
    private searchLocation: SearchLocationService
  ) {}

  ngOnInit() {
      this.productService.getProducts().then((data) => {
          this.products.set([...data.slice(0,12)]);
      });
      this.getLocation();
  }
  getLocation(){
    this.searchLocation.getLocation().subscribe(data => {
        this.location=data.city;

    })}

  getSeverity(product: Doctors) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warn';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  }

}
