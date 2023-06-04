import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
apiUri = '/api/clinica/doctors';
httpOptions = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient:HttpClient) { }
  getDoctor(): Observable<any> {
    return this.httpClient.get(this.apiUri);
  }

  getDoctorInfo() {
    return this.httpClient.get(this.apiUri + '/private');
  }
}
