import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  constructor() { }

  // 2. เมธอดสำหรับแสดง Log
  log(message: string): void {
    console.log(`[Logger Service] ${new Date().toLocaleTimeString()}: ${message}`);
  }
}
