import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from '../models/conge.module';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CongeService {
  private apiUrl = "http://localhost:8082/api/conge";
  private baseURL = "http://localhost:8082/api/user";

  constructor(private http: HttpClient) {}

  // PERSONNEL
  getCongesByMatricule(matricule: string): Observable<Conge[]> {
    return this.http.get<Conge[]>(
      `${this.apiUrl}/getCongesByMatricule/${matricule}`
    );
  }

  createConge(conge: Conge): Observable<any> {
    return this.http.post(`${this.apiUrl}/DemandeConge`, conge);
  }

  updateConge(idConge: number, conge: Conge): Observable<any> {
    return this.http.put(`${this.apiUrl}/editConge/${idConge}`, conge);
  }

  deleteCongesById(id: number): Observable<any> {
    const url = `${this.apiUrl}/conges/${id}`;
    return this.http.delete(url);
  }

  // CHEF
  getCongesByChefId(chefId: number): Observable<any[]> {
    const url = `${this.apiUrl}/conges?chefId=${chefId}`;
    return this.http.get<any[]>(url);
  }

  approveConge(congeId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${congeId}/approve`, {});
  }

  rejectConge(congeId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${congeId}/reject`, {});
  }

  // ADMIN
  getAll(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiUrl}/all`);
  }
  getListByIdChef(idChef: number): Observable<Conge[]> {
    console.log(" id chef  ", idChef)
    return this.http.get<Conge[]>(`${this.apiUrl}/listByIdChef/${idChef}`);
  }
}
