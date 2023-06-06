import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/services/paciente.service';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {


  pacientesList: any = [];
  pacientesForm: any = this.formBuilder.group({
    nombres: '',
    apellidos: '',
    edad: 0,
    telefono: 0,
    historial: '',
    correo: '',
    password: ''
  })

  doctorList: any = [];
  doctorForm: any = this.formBuilder.group({
    nombres: '',
    apellidos: '',
    telefono: 0,
    especialidad: '',
    correo: '',
    password: ''
  })

  constructor(private pacientesService: PacienteService,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
  }
  newPacienteEntry() {
    this.pacientesService.newPaciente(this.pacientesForm.value).subscribe(
      () => {

        this.router.navigate(['/administrador']).then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }
  newDoctorEntry() {
    this.doctorService.newDoctor(this.doctorForm.value).subscribe(
      () => {

        this.router.navigate(['/administrador']).then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }

  ngOnInit() {
    this.getAllPacientes();
    this.getAllDoctors();
  }


  getAllPacientes() {
    this.pacientesService.getPacientes().subscribe(
      (data: {}) => {
        this.pacientesList = data
      }
    );
  }


  getAllDoctors() {
    this.doctorService.getDoctor().subscribe(
      (data: {}) => {
        this.doctorList = data
      }
    );
  }


}
