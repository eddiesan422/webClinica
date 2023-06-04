import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.css']
})
export class ListPacientesComponent implements OnInit{
  listPacientes: Paciente[] = [];
    constructor(private PacienteService: PacienteService) { }
  
    ngOnInit(): void {
      this.getPacientes();
  }
  getPacientes(){
    this.PacienteService.getPacientes().subscribe(
      (data) => {
        console.log(data);
        this.listPacientes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  }
