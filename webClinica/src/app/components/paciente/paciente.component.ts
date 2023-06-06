import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/services/paciente.service';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
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
