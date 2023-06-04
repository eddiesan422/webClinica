import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from 'src/app/services/authentication.service';
import { PacienteAuthenticationService } from 'src/app/services/paciente-authentication.service';
import { DoctorAuthenticationService } from 'src/app/services/doctor-authentication.service';
import { Admin } from 'src/app/models/admin';
import { Paciente } from 'src/app/models/paciente';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = '';
  password: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private adminAuthenticationService: AdminAuthenticationService,
    private pacienteAuthenticationService: PacienteAuthenticationService,
    private doctorAuthenticationService: DoctorAuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');
  }

  onLogin(event: Event): void {
    event.preventDefault();
  
    const correo = this.correo.toLowerCase();
    const password = this.password;
  
    const dominio = correo.split('@')[1]; // Extraer el dominio del correo
  
    if (dominio === 'admin.com') {
      const admin: Admin = { correo, password };
      this.adminAuthenticationService.login(admin).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.access_Token);
          localStorage.setItem('logged', '1');
          this.redirectBasedOnRole('admin');
        },
        (error) => {
          console.error(error);
          // Manejar error de autenticación
        }
      );
    } else if (dominio === 'doctor.com') {
      const doctor: Doctor = { correo, password };
      this.doctorAuthenticationService.login(doctor).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.access_Token);
          localStorage.setItem('logged', '1');
          this.redirectBasedOnRole('doctor');
        },
        (error) => {
          console.error(error);
          // Manejar error de autenticación
        }
      );
    } else if (dominio === 'paciente.com') {
      const paciente: Paciente = { correo, password };
      this.pacienteAuthenticationService.login(paciente).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.access_Token);
          localStorage.setItem('logged', '1');
          this.redirectBasedOnRole('paciente');
        },
        (error) => {
          console.error(error);
          // Manejar error de autenticación
        }
      );
    } else {
      console.error('Dominio desconocido');
      // Manejar dominio desconocido
    }
  }

  redirectBasedOnRole(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigateByUrl('/administrador');
        break;
      case 'paciente':
        this.router.navigateByUrl('/paciente');
        break;
      case 'doctor':
        this.router.navigateByUrl('/doctor');
        break;
      default:
        // Redirigir a una página por defecto en caso de rol desconocido
        this.router.navigateByUrl('/login');
        break;
    }
  }
}
