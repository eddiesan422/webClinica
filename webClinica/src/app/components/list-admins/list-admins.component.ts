import { Component, OnInit } from '@angular/core';
import {Admin} from '../../models/admin';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit{
listAdmins: Admin[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
}
getAdmins(){
  this.adminService.getAdmins().subscribe(
    (data) => {
      console.log(data);
      this.listAdmins = data;
    },
    (error) => {
      console.log(error);
    }
  );
}
}
