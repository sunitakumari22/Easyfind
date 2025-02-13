import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SearchLocationService {

  constructor( private http: HttpClient) {
   }
  getLocation() {
    return this.http.get<any>("https://ipapi.co/json");
  }
}
