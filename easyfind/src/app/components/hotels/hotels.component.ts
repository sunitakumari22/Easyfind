import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule],
  providers: [MessageService],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  hotels: any[] = [];
  filteredHotels: any[] = [];

  constructor(private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(response => {
      this.hotels = response;
      console.log(this.hotels);

      this.filteredHotels = [...this.hotels];
    });
  }
}


