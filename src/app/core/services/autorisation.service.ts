import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autorisation } from '../models/autorisation.module';

@Injectable({
  providedIn: "root",
})
export class AutorisationService {
  private baseUrl = "http://localhost:8082/api/autorisation";

  constructor(private http: HttpClient) {}

  // For Personnel

  getAutorisationsByMatricule(matricule: string): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(
      `${this.baseUrl}/getAutorisationsByMatricule/${matricule}`
    );
  }

  createAutorisation(autorisation: Autorisation): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/createAutorisation`,
      autorisation
    );
  }
  updateAutorisation(id: number, autorisation: Autorisation): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/updateAutorisationsById/${id}`,
      autorisation
    );
  }

  // For Manager (Chef)

  approveAuthorization(authorizationId: number): Observable<any> {
    const url = `${this.baseUrl}/authorizations/${authorizationId}/approve`;
    return this.http.put<any>(url, {});
  }
  getAuthorizationsByChefId(chefId: string): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(`${this.baseUrl}/chef/${chefId}`);
  }
  rejectAuthorization(authorizationId: number): Observable<any> {
    const url = `${this.baseUrl}/authorizations/${authorizationId}/reject`;
    return this.http.put<any>(url, {});
  }

  // Shared Methods

  getAll(): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(`${this.baseUrl}/getAllAutorisations`);
  }

  getById(id: number): Observable<Autorisation> {
    return this.http.get<Autorisation>(`${this.baseUrl}/${id}`);
  }

  deleteAutorisationById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(
      `${this.baseUrl}/deleteAutorisationById/${id}`,
      { observe: "response" }
    );
  }

  getListByIdChef(idChef): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(
      `${this.baseUrl}/listByIdChef/${idChef}`
    );
  }
}
