import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      <!-- Background patterns -->
      <div class="absolute inset-0 circuit-pattern opacity-20"></div>
      <div class="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div class="space-y-8" [@leftContentAnimation]>
            <div class="space-y-6">
              <div
                class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm border border-orange-500/30"
                [@badgeAnimation]
              >
                <i class="fas fa-lightbulb mr-2"></i>
                Tại sao chọn chúng tôi?
              </div>

              <h2 class="text-4xl lg:text-5xl font-bold leading-tight" [@titleAnimation]>
                <span class="text-white">Hãy bắt đầu hành trình của bạn với </span>
                <span class="bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">
                  MVA Lab!
                </span>
              </h2>

              <p class="text-lg text-gray-400 leading-relaxed" [@descriptionAnimation]>
                Các khóa học tại MVA Lab giúp triết kế những kiến thức thực tế theo trau dồi 
                câu thực hiện trong công nghiệp, sử dụng ngôn ngữ C#, Python, cùng một Kẻ hi 
                ngôn từ quá Senai, TCP/IP, Modbus và nhiều chuẩn công nghiệp khác.
              </p>
            </div>

            <!-- Features -->
            <div class="space-y-6">
              <div
                *ngFor="let feature of features; let i = index"
                class="flex space-x-4 group"
                [@featureAnimation]="{ value: '*', params: { delay: (400 + i * 200) + 'ms' } }"
              >
                <div [class]="'w-14 h-14 rounded-xl bg-gradient-to-br ' + feature.color + ' flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'">
                  <i [class]="feature.icon + ' text-white text-xl'"></i>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>

            <button
              class="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center glow-effect hover:scale-105"
              [@buttonAnimation]
            >
              <i class="fas fa-info-circle mr-3"></i>
              Tìm hiểu thêm về MVA Lab
              <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          <!-- Right Content - MVA Lab Visual -->
          <div class="relative" [@rightContentAnimation]>
            <div class="relative w-full h-96 lg:h-[500px]">
              <!-- Main card -->
              <div class="relative w-full h-full bg-gradient-to-br from-dark-700 to-dark-900 rounded-3xl p-8 glass-effect shadow-2xl overflow-hidden">
                <!-- Top section with logo -->
                <div class="flex items-center justify-between mb-8">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <i class="fas fa-eye text-white text-xl"></i>
                    </div>
                    <div>
                      <div class="text-white font-bold text-lg">MVA LAB</div>
                      <div class="text-gray-400 text-sm">Top Rated Courses</div>
                    </div>
                  </div>
                  <div class="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm border border-green-500/30">
                    Online
                  </div>
                </div>

                <!-- Central logo design -->
                <div class="flex items-center justify-center h-48">
                  <div class="relative" [@logoAnimation]>
                    <!-- Outer triangle -->
                    <div class="w-32 h-32 relative">
                      <svg class="w-full h-full" viewBox="0 0 100 100">
                        <polygon 
                          points="50,10 90,70 10,70" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="2"
                          class="text-primary-400"
                        />
                      </svg>
                    </div>
                    
                    <!-- Inner eye -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center animate-pulse-glow" [@eyeAnimation]>
                        <div class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center">
                          <div class="w-4 h-4 bg-primary-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <!-- M and V letters -->
                    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div class="text-3xl font-bold text-white tracking-wider">MVA LAB</div>
                    </div>
                  </div>
                </div>

                <!-- Floating particles -->
                <div class="absolute top-16 right-16 w-4 h-4 bg-orange-400 rounded-full animate-float"></div>
                <div class="absolute bottom-16 left-16 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <div class="absolute top-32 left-12 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>

                <!-- Circuit pattern overlay -->
                <div class="absolute inset-0 circuit-pattern opacity-10"></div>
              </div>

              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('leftContentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('rightContentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('badgeAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 200ms ease-out', style({ scale: 1 }))
      ])
    ]),
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('descriptionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('featureAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms {{ delay }} ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('logoAnimation', [
      transition(':enter', [
        style({ scale: 0.8, opacity: 0 }),
        animate('800ms 500ms ease-out', style({ scale: 1, opacity: 1 }))
      ])
    ]),
    trigger('eyeAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 700ms spring', style({ scale: 1 }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  features: Feature[] = [
    {
      icon: 'fas fa-microchip',
      title: 'Xây dựng phần mềm điều khiển chuyên nghiệp từ nền tảng',
      description: 'Học tập từ PC Control bí cá bản đến nâng cao với các kỹ năng lập trình giao thức phức tạp 5S, và kỹ sự xuất sắc và đầu tư lãnh hội thường.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Được đào tạo bởi chuyên gia giải kinh nghiệm thực tiễn',
      description: 'Khóa học ai kém project mà phòng thật thật thực, có chuyên gia hướng dẫn giúp kinh nghiệm thực tế.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  ngOnInit() {
    // Component initialization
  }
}