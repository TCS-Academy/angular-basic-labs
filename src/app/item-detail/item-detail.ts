import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-detail',
  imports: [CommonModule],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetail {
  @Input() itemData: any; 
}
