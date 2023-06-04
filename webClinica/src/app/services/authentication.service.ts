import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Admin } from '../models/admin';
import { AdminJwtres } from '../models/adminJwtres';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {
  apiUri = 'http://localhost:3000/api/clinica';
  authSubject = new BehaviorSubject(false);
  private token: string | null = null; // Corregido: inicializar como null

  constructor(private httpClient: HttpClient, private router: Router) {
    this.token = this.getToken();
  }

  private saveToken(token: string, expiresIn: string) {
    localStorage.setItem('token', token); // Actualizado: usar 'token' en lugar de 'accessToken'
    localStorage.setItem('expiresIn', expiresIn);
    this.token = token;
  }

  register(admin: Admin): Observable<AdminJwtres> {
    return this.httpClient.post<AdminJwtres>(this.apiUri + '/admins', admin).pipe(
      tap((res: AdminJwtres) => {
        if (res) {
          this.saveToken(res.access_Token, res.expires_In); // Actualizado: usar 'token' en lugar de 'accessToken'
        }
      })
    );
  }

  login(admin: Admin): Observable<AdminJwtres> {
    return this.httpClient.post<AdminJwtres>(this.apiUri + '/admins/login', admin).pipe(
      tap((res: AdminJwtres) => {
        if (res) {
          this.saveToken(res.access_Token, res.expires_In); // Actualizado: usar 'token' en lugar de 'accessToken'
        }
      })
    );
  }

  loggedIn() {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    this.token = null; // Corregido: asignar null al campo token
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('logged');
    this.router.navigate(['login']);
  }
}
