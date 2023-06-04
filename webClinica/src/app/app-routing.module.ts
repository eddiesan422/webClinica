import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PacienteComponent } from './components/paciente/paciente.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'administrador', component: AdministradorComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }