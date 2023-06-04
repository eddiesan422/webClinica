import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorAuthenticationService } from './doctor-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorTokenInterceptorService implements HttpInterceptor {
  constructor(private doctorauthenticationService: DoctorAuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.doctorauthenticationService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
