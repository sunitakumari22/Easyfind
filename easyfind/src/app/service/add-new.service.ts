import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewService {
  private apiUrl = 'https://easyfind-backend-sigma.vercel.app/api/newHotels';


   constructor(private http: HttpClient) { }
   
     getHotels(): Observable<any> {
       return this.http.get('https://easyfind-backend-sigma.vercel.app/api/hotelList'); 
     }
     postHotel(hotelData: any): Observable<any> {
      return this.http.post(this.apiUrl, hotelData);
    }
}
