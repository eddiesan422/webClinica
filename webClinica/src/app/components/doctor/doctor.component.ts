import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  constructor(private pacientesService: PacienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
  }

  pacientesList: any = [];

  ngOnInit() {
    this.getAllPacientes();
  }


  getAllPacientes() {
    this.pacientesService.getPacientes().subscribe(
      (data: {}) => {
        this.pacientesList = data
      }
    );
  }

}
