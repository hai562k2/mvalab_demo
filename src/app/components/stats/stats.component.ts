import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface Stat {
  number: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      <!-- Background patterns -->
      <div class="absolute inset-0 circuit-pattern opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div
          class="text-center mb-16"
          [@sectionAnimation]
        >
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Hành trình cùng 
            <span class="bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent"> MVA Lab</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Chúng tôi tự hào về những con số ấn tượng và sự tin tưởng của cộng đồng học viên
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            *ngFor="let stat of stats; let i = index"
            class="text-center group"
            [@statItemAnimation]="{ value: '*', params: { delay: i * 100 + 'ms' } }"
            (mouseenter)="onStatHover(i, true)"
            (mouseleave)="onStatHover(i, false)"
          >
            <div class="relative mb-6">
              <!-- Icon background -->
              <div class="w-20 h-20 mx-auto bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center glass-effect group-hover:glow-effect transition-all duration-300">
                <i [class]="stat.icon + ' text-3xl ' + stat.color"></i>
              </div>
              
              <!-- Decorative ring -->
              <div class="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-primary-500/20 group-hover:border-primary-500/50 transition-colors duration-300 animate-pulse"></div>
            </div>

            <div class="space-y-2">
              <div class="text-4xl lg:text-5xl font-bold text-white">
                {{ getAnimatedCount(stat.number, i) }}{{ stat.suffix }}
              </div>
              
              <div [class]="'text-lg font-medium ' + stat.color">
                {{ stat.label }}
              </div>
              
              <div class="w-12 h-1 bg-gradient-to-r from-primary-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Additional decorative elements -->
        <div class="flex justify-center mt-16">
          <div
            class="flex items-center space-x-4 px-8 py-4 glass-effect rounded-2xl"
            [@badgeAnimation]
          >
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-green-400 font-medium">Đang phát triển mạnh mẽ</span>
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('sectionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('statItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms {{ delay }} ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('badgeAnimation', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('600ms 500ms spring', style({ scale: 1 }))
      ])
    ])
  ]
})
export class StatsComponent implements OnInit, OnDestroy {
  stats: Stat[] = [
    {
      number: 2,
      suffix: '+',
      label: 'Khóa học',
      icon: 'fas fa-graduation-cap',
      color: 'text-primary-400'
    },
    {
      number: 10,
      suffix: '+',
      label: 'Giảng viên',
      icon: 'fas fa-chalkboard-teacher',
      color: 'text-orange-400'
    },
    {
      number: 200,
      suffix: '+',
      label: 'Học viên',
      icon: 'fas fa-users',
      color: 'text-green-400'
    },
    {
      number: 1,
      suffix: '+',
      label: 'Sản phẩm',
      icon: 'fas fa-box',
      color: 'text-purple-400'
    }
  ];

  animatedCounts: number[] = [];
  animationInProgress: boolean[] = [];
  private intervalIds: any[] = [];

  ngOnInit() {
    this.animatedCounts = new Array(this.stats.length).fill(0);
    this.animationInProgress = new Array(this.stats.length).fill(false);
    
    // Start animations after a brief delay
    setTimeout(() => {
      this.startCountAnimations();
    }, 500);
  }

  ngOnDestroy() {
    this.intervalIds.forEach(id => clearInterval(id));
  }

  startCountAnimations() {
    this.stats.forEach((stat, index) => {
      this.animateCount(stat.number, index, 2000);
    });
  }

  animateCount(target: number, index: number, duration: number) {
    if (this.animationInProgress[index]) return;
    
    this.animationInProgress[index] = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      this.animatedCounts[index] = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.animationInProgress[index] = false;
      }
    };

    requestAnimationFrame(animate);
  }

  getAnimatedCount(target: number, index: number): number {
    return this.animatedCounts[index] || 0;
  }

  onStatHover(index: number, isHovering: boolean) {
    // Add hover effects if needed
  }
}