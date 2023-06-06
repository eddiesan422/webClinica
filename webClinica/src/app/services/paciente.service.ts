import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  apiUri = 'http://localhost:3000/api/clinica/pacientes';
  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }
  getPacientes(): Observable<any> {
    return this.httpClient.get(this.apiUri);
  }

  getPacienteInfo() {
    return this.httpClient.get(this.apiUri + '/private');
  }
  newPaciente(data: any): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUri,
      data,
      {});
  }
}
