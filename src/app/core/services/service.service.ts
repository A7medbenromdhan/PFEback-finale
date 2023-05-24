import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'api/services'; // Replace 'api/services' with the actual API endpoint

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, service);
  }

  updateService(service: Service): Observable<Service> {
    const url = `${this.apiUrl}/${service.idService}`;
    return this.http.put<Service>(url, service);
  }

  deleteService(serviceId: number): Observable<void> {
    const url = `${this.apiUrl}/${serviceId}`;
    return this.http.delete<void>(url);
  }
}
