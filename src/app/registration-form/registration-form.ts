import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm implements OnInit{
  // 2. ตัวแปรสำหรับผูกกับ ngModel
  username: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
