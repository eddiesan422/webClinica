import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})

export class ListDoctorComponent implements OnInit{
  listDoctors: Doctor[] = [];
    constructor(private adminService: DoctorService) { }
  
    ngOnInit(): void {
      this.getAdmins();
  }
  getAdmins(){
    this.adminService.getDoctor().subscribe(
      (data) => {
        console.log(data);
        this.listDoctors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  }