import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 2.1 นำเข้า HttpClient
import { Observable } from 'rxjs'; // 2.2 นำเข้า Observable

@Injectable({
  providedIn: 'root'
})
export class DataManager {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  private counterValue: number = 0; // ตัวแปร private

  constructor(private http: HttpClient) { } // 2.3 DI เพื่อนำเข้า HttpClient

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCounter(): number {
    return this.counterValue;
  }

  incrementCounter(): void {
    this.counterValue++;
    console.log(`Counter updated to: ${this.counterValue}`);
  }
}
