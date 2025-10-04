import { Component, OnInit } from '@angular/core';
import { DataManager } from '../data-manager';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList implements OnInit  {
  posts: any[] = []; // 3.1 ตัวแปรสำหรับเก็บข้อมูล Post

  constructor(private dataManager: DataManager) { } // DI Service

  ngOnInit(): void {
    // 3.2 Subscribe: เรียกเมธอดของ Service และรอรับข้อมูล
    this.dataManager.getPosts().subscribe({
      next: (data) => {
        // เมื่อได้รับข้อมูลสำเร็จ (Next)
        this.posts = data; 
        console.log('Posts loaded successfully:', data);
      },
      error: (err) => {
        // หากเกิดข้อผิดพลาด (Error)
        console.error('Error fetching posts:', err);
      },
      complete: () => {
        // เมื่อ Observable เสร็จสมบูรณ์ (Optional)
        console.log('Post fetching completed.');
      }
    });
  }

}
