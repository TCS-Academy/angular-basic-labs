import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManager {
  private counterValue: number = 0; // ตัวแปร private

  constructor() { }

  getCounter(): number {
    return this.counterValue;
  }

  incrementCounter(): void {
    this.counterValue++;
    console.log(`Counter updated to: ${this.counterValue}`);
  }
}
