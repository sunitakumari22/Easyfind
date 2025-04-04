import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsSearchService {
  private apiUrl = 'https://easyfind-backend-sigma.vercel.app/api/newDoctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get('https://easyfind-backend-sigma.vercel.app/api/doctorsList'); 
  }
  postDoctors(doctorsData: any): Observable<any> {
    return this.http.post(this.apiUrl, doctorsData);
  }
}
