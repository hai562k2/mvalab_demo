import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    CoursesComponent,
    AboutComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-900" [@pageAnimation]="'*'">
      <!-- Loading Screen -->
      <div *ngIf="isLoading" class="fixed inset-0 bg-dark-900 flex items-center justify-center z-50" [@fadeAnimation]>
        <div class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse-glow">
            <span class="text-white font-bold text-3xl">M</span>
          </div>
          
          <h1 class="text-3xl font-bold text-white mb-4 animate-fade-in-up">
            MVA Lab
          </h1>
          
          <p class="text-gray-400 mb-8 animate-fade-in-up">
            Đang tải nền tảng học tập...
          </p>

          <div class="flex justify-center">
            <div class="w-8 h-8 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div *ngIf="!isLoading" [@contentAnimation]>
        <app-header></app-header>
        
        <main>
          <app-hero></app-hero>
          <app-stats></app-stats>
          <app-courses></app-courses>
          <app-about></app-about>
        </main>

        <!-- Footer -->
        <footer class="bg-dark-900 border-t border-dark-700 py-12">
          <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8">
              <!-- Company Info -->
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold">M</span>
                  </div>
                  <span class="text-xl font-bold text-white">MVA Lab</span>
                </div>
                <p class="text-gray-400">
                  Nền tảng giáo dục công nghệ hàng đầu Việt Nam
                </p>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <!-- Quick Links -->
              <div>
                <h3 class="text-white font-semibold mb-4">Liên kết nhanh</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Khóa học</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Giải pháp</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Liên hệ</a></li>
                </ul>
              </div>

              <!-- Support -->
              <div>
                <h3 class="text-white font-semibold mb-4">Hỗ trợ</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Trung tâm trợ giúp</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Câu hỏi thường gặp</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Chính sách</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Điều khoản</a></li>
                </ul>
              </div>

              <!-- Contact -->
              <div>
                <h3 class="text-white font-semibold mb-4">Liên hệ</h3>
                <div class="space-y-2 text-gray-400">
                  <div class="flex items-center space-x-2">
                    <i class="fas fa-map-marker-alt w-4"></i>
                    <span>Hà Nội, Việt Nam</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <i class="fas fa-phone w-4"></i>
                    <span>+84 123 456 789</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <i class="fas fa-envelope w-4"></i>
                    <span>info@mvalab.vn</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-dark-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 MVA Lab. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </footer>

        <!-- Scroll to top button -->
        <button
          *ngIf="showScrollTop"
          (click)="scrollToTop()"
          class="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-bounce"
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  `,
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeAnimation', [
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('contentAnimation', [
      transition(':enter', [
        query(':self', [
          style({ transform: 'translateY(50px)', opacity: 0 }),
          animate('800ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'MVA Lab';
  isLoading = true;
  showScrollTop = false;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    // Show scroll to top button when scrolled
    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 300;
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}