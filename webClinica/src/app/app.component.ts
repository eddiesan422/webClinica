import { Component } from '@angular/core';
import { AdminAuthenticationService } from './services/authentication.service';
import { PacienteAuthenticationService } from './services/paciente-authentication.service';
import { DoctorAuthenticationService } from './services/doctor-authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public adminAuthenticationService: AdminAuthenticationService,
    public pacienteAuthenticationService: PacienteAuthenticationService,
    public doctorAuthenticationService: DoctorAuthenticationService
  ) {}
  logout() {
    this.adminAuthenticationService.logout();
    this.doctorAuthenticationService.logout();
    this.pacienteAuthenticationService.logout();
  }
}

