import { Component } from '@angular/core';
import { DataManager as DataManagerService } from '../data-manager';

@Component({
  selector: 'app-counter-control',
  imports: [],
  templateUrl: './counter-control.html',
  styleUrl: './counter-control.css'
})
export class CounterControl {
  // DI เพื่อเข้าถึง Service
  constructor(private dataManager: DataManagerService) { } 

  // เมธอดเรียก Service เพื่อเพิ่มค่า
  increment(): void {
    this.dataManager.incrementCounter();
  }
}
