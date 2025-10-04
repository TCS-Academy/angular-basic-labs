import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-detail',
  imports: [CommonModule],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetail {
  @Input() itemData: any; 

    // 2. สร้าง @Output ด้วย EventEmitter
  @Output() buyEvent = new EventEmitter<string>(); // กำหนด Type เป็น string (ชื่อสินค้า)
  
  // 3. เมธอดสำหรับ Emit Event
  buyItem(): void {
    if (this.itemData) {
      // ส่งชื่อสินค้ากลับไปให้ Parent
      this.buyEvent.emit(this.itemData.name); 
    }
  }
}
