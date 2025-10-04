import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { FormsModule } from '@angular/forms';
import { UserList } from './user-list/user-list';
import { ItemDetail } from './item-detail/item-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, UserList, ItemDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basic-labs');
     // 1. กำหนดตัวแปรสำหรับ Interpolation
  appName: string = 'Angular Data Binding Lab'; 
  
  // 2. กำหนดตัวแปรสำหรับ Property Binding
  isDisabled: boolean = true; 

  myMoney: number = 100;

  username: string = '';
  // 1. เมธอดสำหรับ Event Binding
  toggleDisable(): void {
    this.isDisabled = !this.isDisabled;
  }
  product = { 
    name: 'Angular Training Course', 
    price: 499.99 
  }

  product2 = { 
    name: 'Java Training Course', 
    price: 1099.99 
  }
  handlePurchase(itemName: string): void {
    alert(`Parent ได้รับการแจ้งเตือน: สินค้า "${itemName}" ถูกซื้อแล้ว!`);
  }


}
