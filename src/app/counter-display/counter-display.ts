import { Component, DoCheck } from '@angular/core';
import { DataManager as DataManager } from '../data-manager';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css'
})
export class CounterDisplay implements DoCheck {
  currentCounter: number = 0;
  // DI
  constructor(private dataManager: DataManager) { }
  // 4.3 Lifecycle Hook: ตรวจสอบการเปลี่ยนแปลงและดึงค่าล่าสุดจาก Service
  ngDoCheck(): void { 
    this.currentCounter = this.dataManager.getCounter();
  }

}
