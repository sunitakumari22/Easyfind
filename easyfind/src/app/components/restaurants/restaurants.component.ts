import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RestaurantsService } from '../../service/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule],
  providers:[MessageService],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
   restaurants: any[] = [];
       filteredRestaurants: any[] = [];
      
        constructor(private restaurantsService: RestaurantsService,
          private router: Router,
          private route: ActivatedRoute,
          private messageService: MessageService,
        ) {}
      
        ngOnInit() {
            this.restaurantsService.getRestaurants().subscribe(response => {
              this.restaurants = response;
              
              this.filteredRestaurants = [...this.restaurants];
            });
          }
        

}
