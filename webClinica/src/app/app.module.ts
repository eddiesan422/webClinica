import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './services/tokeninterceptor.service';
import { DoctorTokenInterceptorService } from './services/doctortokeninterceptor.service';
import { PacienteTokenInterceptorService } from './services/pacientetokeninterceptor.service';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListDoctorComponent } from './components/list-doctors/list-doctors.component';
import { ListPacientesComponent } from './components/list-pacientes/list-pacientes.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PacienteComponent } from './components/paciente/paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    ListAdminsComponent,
    ListDoctorComponent,
    ListPacientesComponent,
    DoctorComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,},
    {
    provide: HTTP_INTERCEPTORS,
    useClass: DoctorTokenInterceptorService,
    multi: true,},
    {
    provide: HTTP_INTERCEPTORS,
    useClass: PacienteTokenInterceptorService,
    multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
