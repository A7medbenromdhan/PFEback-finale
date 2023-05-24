import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/auth.models';

@Injectable({ providedIn: "root" })
export class UserProfileService {
  private baseURL = "http://localhost:8082/api/user";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/api/login`);
  }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }
  getAllPersonnels() {
    return this.http.get<any[]>(`${this.baseURL}/getListPersonnels`);
  }
  deleteUser(id){
    return this.http.delete(`${this.baseURL}/${id}`);

  }
  getUserByMatricule(matricule){
     return this.http.get<any[]>(`${this.baseURL}/get/${matricule}`);
  }
  getListChefs(){
     return this.http.get<any[]>(`${this.baseURL}/getListChefs`);
  }
}
