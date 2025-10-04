import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 2.1 นำเข้า HttpClient
import { Observable } from 'rxjs'; // 2.2 นำเข้า Observable
import { map } from 'rxjs/operators'; // 1.1 นำเข้า map operator

@Injectable({
  providedIn: 'root'
})
export class DataManager {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  private counterValue: number = 0; // ตัวแปร private

  constructor(private http: HttpClient) { } // 2.3 DI เพื่อนำเข้า HttpClient

  getPosts(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe( // 1.2 ใช้ pipe เพื่อต่อ Operator
        map(posts => {
          // 1.3 ใช้ map เพื่อแปลงข้อมูลแต่ละ Post ใน Array
          return posts.map(post => ({
            id: post.id,
            title: post.title // เลือกเฉพาะ id และ title
          }));
        })
      );
  }


  getCounter(): number {
    return this.counterValue;
  }

  incrementCounter(): void {
    this.counterValue++;
    console.log(`Counter updated to: ${this.counterValue}`);
  }
}
