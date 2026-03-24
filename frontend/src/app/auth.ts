import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(`${this.api}/login`, user);
  }

  register(user: any) {
  return this.http.post(`${this.api}/register`, user);
}
}