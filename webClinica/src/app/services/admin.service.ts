import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
apiUri = 'http://localhost:3000/api/clinica/admins';
httpOptions = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient:HttpClient) { }
  getAdmins(): Observable<any> {
    return this.httpClient.get(this.apiUri);
  }

  getAdminInfo() {
    return this.httpClient.get(this.apiUri + '/private');
  }
}
