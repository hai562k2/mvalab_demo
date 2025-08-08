import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <!-- Background patterns and effects -->
      <div class="absolute inset-0 circuit-pattern"></div>
      <div class="absolute inset-0 geometric-bg"></div>
      
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-20 h-20 border-2 border-primary-500/30 rotate-45 animate-float"></div>
      <div class="absolute bottom-32 right-16 w-16 h-16 border-2 border-orange-500/30 rotate-12 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-20 w-12 h-12 bg-primary-500/10 rounded-full animate-pulse"></div>

      <div class="container mx-auto px-6 py-32 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8" [@contentSlideIn]>
            <div class="space-y-6">
              <div
                class="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm border border-primary-500/30"
                [@badgeAnimation]
              >
                <i class="fas fa-rocket mr-2"></i>
                Khám phá tương lai
              </div>

              <h1 class="text-5xl lg:text-7xl font-bold leading-tight" [@titleAnimation]>
                <span class="text-white">Nền công nghiệp</span>
                <br />
                <span class="text-glow bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">
                  hóa hiện đại
                </span>
                <br />
                <span class="text-white underline decoration-primary-400 decoration-4 underline-offset-8">
                  Hà Nội
                </span>
              </h1>

              <p
                class="text-xl text-gray-300 leading-relaxed max-w-lg"
                [@descriptionAnimation]
              >
                Xử lý ảnh công nghiệp giúp máy móc kiểm tra sản phẩm nhanh chóng và chính xác hơn con người...
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4" [@buttonsAnimation]>
              <button class="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center glow-effect hover:scale-105">
                <i class="fas fa-play mr-3"></i>
                Xem thêm
                <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
              </button>
              
              <button class="px-8 py-4 border-2 border-primary-500 text-primary-400 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <i class="fas fa-phone mr-3"></i>
                Liên hệ ngay
              </button>
            </div>
          </div>

          <!-- Right Content - 3D Visual -->
          <div class="relative" [@visualSlideIn]>
            <div class="relative w-full h-96 lg:h-[500px]">
              <!-- Main device illustration -->
              <div class="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900 rounded-3xl shadow-2xl overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <!-- Industrial equipment visualization -->
                <div class="absolute inset-4 border-2 border-primary-500/30 rounded-2xl">
                  <div class="w-full h-full flex items-center justify-center">
                    <!-- Central eye/camera -->
                    <div class="relative">
                      <div class="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center animate-pulse-glow" [@centerEyeAnimation]>
                        <div class="w-20 h-20 bg-dark-900 rounded-full flex items-center justify-center">
                          <div class="w-12 h-12 bg-primary-400 rounded-full"></div>
                        </div>
                      </div>
                      
                      <!-- Connecting lines -->
                      <div class="absolute -top-8 left-1/2 w-px h-16 bg-primary-400/50" [@lineAnimation]></div>
                      <div class="absolute -bottom-8 left-1/2 w-px h-16 bg-primary-400/50" [@lineAnimation]></div>
                      <div class="absolute top-1/2 -left-8 h-px w-16 bg-primary-400/50" [@lineAnimation]></div>
                      <div class="absolute top-1/2 -right-8 h-px w-16 bg-primary-400/50" [@lineAnimation]></div>
                    </div>
                  </div>
                </div>

                <!-- Floating elements -->
                <div class="absolute top-8 right-8 w-8 h-8 bg-orange-400 rounded rotate-45 animate-float"></div>
                <div class="absolute bottom-8 left-8 w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
              </div>

              <!-- Glowing border effect -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 to-orange-500/20 blur-xl"></div>
            </div>

            <!-- MVA LAB logo overlay -->
            <div
              class="absolute bottom-8 right-8 px-6 py-3 glass-effect rounded-2xl"
              [@logoAnimation]
            >
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-400 mb-1">MVA LAB</div>
                <div class="text-xs text-gray-400">Top Rated Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        [@scrollIndicator]
      >
        <div class="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('contentSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('visualSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('badgeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('descriptionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonsAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('centerEyeAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 500ms ease-out', style({ scale: 1 }))
      ])
    ]),
    trigger('lineAnimation', [
      transition(':enter', [
        style({ opacity: 0, scale: 0 }),
        animate('400ms 700ms ease-out', style({ opacity: 1, scale: 1 }))
      ])
    ]),
    trigger('logoAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 1000ms spring', style({ scale: 1 }))
      ])
    ]),
    trigger('scrollIndicator', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms 1500ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  
  ngOnInit() {
    // Component initialization
  }
}