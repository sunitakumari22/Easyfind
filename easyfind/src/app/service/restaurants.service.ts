import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }
      
        getRestaurants(): Observable<any> {
          return this.http.get('http://localhost:5000/api/restroList'); 
        }
}
