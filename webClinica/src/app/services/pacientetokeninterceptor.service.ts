import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteAuthenticationService } from './paciente-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PacienteTokenInterceptorService implements HttpInterceptor {
  constructor(private pacienteauthenticationService: PacienteAuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.pacienteauthenticationService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
