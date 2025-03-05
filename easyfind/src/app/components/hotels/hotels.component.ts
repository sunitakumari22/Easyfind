import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchLocationService } from '../../service/search-location.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule,ToolbarModule,FormsModule],
  providers: [MessageService],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  hotels: any[] = [];
  filteredHotels: any[] = [];
  location:string=''

  constructor(private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private searchLocation: SearchLocationService
  ) { }

  ngOnInit() {
    this.getLocation();
    this.getHotel();
    
  }
  getHotel(){
    this.hotelService.getHotels().subscribe(response => {
      this.hotels = response;
      console.log(this.hotels);

      this.filteredHotels = [...this.hotels];
    });

  }
  getLocation(){
    this.searchLocation.getLocation().subscribe(data => {
        this.location=data.city;

    })}
}


