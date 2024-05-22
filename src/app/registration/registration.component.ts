import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private http: HttpClient) {}

  NewEmployee(employees: {
    name: string;
    surname: string;
    gender: string;
    phone: number;
    email: EmailValidator;
    address: string;
    idNo: number;
    employeeId: number;
    password: string;
    department: string;
    workRole: string;
    emergencyContactName: string;
    emergencyContactRelationship: string;
    emergencyContactNo: number;
  }) {
    console.log(employees);
    this.http.post('http://localhost:3000/employeeData',employees).subscribe((res) => {
        console.log(res);
      });
  }


  }
