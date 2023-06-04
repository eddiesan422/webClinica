import { Component } from '@angular/core';
import { AdminAuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public adminAuthenticationService:AdminAuthenticationService){}
}
