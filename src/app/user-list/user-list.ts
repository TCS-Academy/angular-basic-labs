import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
   users: { name: string, isActive: boolean, joinedDate: Date }[] = [
    { name: 'Alice', isActive: true, joinedDate: new Date(2023, 1, 15) },
    { name: 'Bob', isActive: true, joinedDate: new Date(2024, 5, 20) },
    { name: 'Charlie', isActive: false, joinedDate: new Date(2022, 11, 5) }
  ];

}
