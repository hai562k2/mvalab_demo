import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  students: number;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="courses" class="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 circuit-pattern opacity-20"></div>
      <div class="absolute top-20 right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div
          class="text-center mb-16"
          [@sectionHeaderAnimation]
        >
          <div
            class="inline-flex items-center px-6 py-3 bg-primary-500/20 rounded-full text-primary-300 text-sm border border-primary-500/30 mb-6"
            [@badgeAnimation]
          >
            <i class="fas fa-star mr-2"></i>
            Tại sao chọn chúng tôi?
          </div>

          <h2 class="text-4xl lg:text-6xl font-bold mb-6">
            <span class="text-white">Khóa học</span>
            <span class="bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent"> nổi bật</span>
          </h2>

          <p class="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Chương trình đào tạo tại MVA Lab được xây dựng dựa vào phần mềm cái ra kinh nghiệm, kiến 
            thức giúp từ thực hành về thực tế triển khai cài đặt lộ trình phần mềm thành chuẩn công nghiệp 
            của C#, WPF, WinUI, Halcon, OpenCV, v.v. Cùng với cả các chuyên gia có nhiều năm kinh 
            nghiệm triển khai các ứng dụng thực tế trong tình thực tế đông hóa...
          </p>
        </div>

        <!-- Courses Grid -->
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16" [@coursesGridAnimation]>
          <div
            *ngFor="let course of courses; let i = index"
            class="group relative overflow-hidden rounded-2xl glass-effect hover:glow-effect transition-all duration-300 cursor-pointer"
            [@courseCardAnimation]="{ value: '*', params: { delay: i * 100 + 'ms' } }"
            (mouseenter)="onCourseHover(i, true)"
            (mouseleave)="onCourseHover(i, false)"
            [class.hover-transform]="hoveredCards[i]"
          >
            <!-- Background Image -->
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 circuit-pattern"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <!-- Course Code -->
              <div class="absolute top-4 left-4 px-3 py-1 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium border border-primary-500/30">
                {{ course.code }}
              </div>

              <!-- Edit Icon -->
              <div class="absolute top-4 right-4 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500/30 transition-colors duration-300">
                <i class="fas fa-edit text-sm"></i>
              </div>

              <!-- Instructor -->
              <div class="absolute bottom-4 left-4 text-sm text-gray-300">
                <i class="fas fa-user mr-2"></i>
                {{ course.instructor }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                {{ course.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-4 leading-relaxed">
                {{ course.description }}
              </p>
              
              <!-- Duration -->
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-500">
                  <i class="fas fa-clock mr-2"></i>
                  {{ course.duration }}
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-green-400">Đang mở</span>
                </div>
              </div>
            </div>

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="text-center"
          [@ctaAnimation]
        >
          <div class="inline-flex flex-col sm:flex-row gap-4">
            <button class="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center glow-effect hover:scale-105">
              <i class="fas fa-eye mr-3"></i>
              Tìm hiểu thêm về MVA Lab
              <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <button class="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-calendar-alt mr-3"></i>
              Đặt lịch tư vấn
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hover-transform {
      transform: translateY(-10px);
    }
  `],
  animations: [
    trigger('sectionHeaderAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('badgeAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 200ms ease-out', style({ scale: 1 }))
      ])
    ]),
    trigger('coursesGridAnimation', [
      transition(':enter', [
        query('.group', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('courseCardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms {{ delay }} ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('ctaAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CoursesComponent implements OnInit {
  hoveredCards: boolean[] = [];

  courses: Course[] = [
    {
      id: 1,
      code: "PC001",
      title: "PC Control - Điều khiển máy công nghiệp",
      description: "Khóa học chuyên sâu về điều khiển máy công nghiệp sử dụng PC, lập trình PLC và hệ thống tự động hóa.",
      instructor: "Lê Minh Quang",
      duration: "Từ ngày 01/01/1970 đến ngày 01/01/1970",
      level: "Trung cấp",
      students: 45
    },
    {
      id: 2,
      code: "FE001",
      title: "Lập trình Frontend từ A-Z",
      description: "Học lập trình Frontend hiện đại với React, Vue.js và các công nghệ mới nhất trong phát triển web.",
      instructor: "Nguyễn Văn Hải",
      duration: "Từ ngày 01/01/1970 đến ngày 01/01/1970",
      level: "Cơ bản",
      students: 67
    },
    {
      id: 3,
      code: "VI001",
      title: "Xử lý ảnh với Machine Vision",
      description: "Khóa học về xử lý ảnh công nghiệp, machine vision và AI trong sản xuất tự động.",
      instructor: "Trần Thị Bích",
      duration: "Từ ngày 01/01/1970 đến ngày 01/01/1970",
      level: "Nâng cao",
      students: 32
    },
    {
      id: 4,
      code: "PC003",
      title: "PC Control - Điều khiển nâng cao",
      description: "Khóa học nâng cao về hệ thống điều khiển phức tạp và tích hợp đa platform.",
      instructor: "Lê Minh Cường",
      duration: "Từ ngày 01/01/1970 đến ngày 01/01/1970",
      level: "Nâng cao",
      students: 28
    }
  ];

  ngOnInit() {
    this.hoveredCards = new Array(this.courses.length).fill(false);
  }

  onCourseHover(index: number, isHovering: boolean) {
    this.hoveredCards[index] = isHovering;
  }
}