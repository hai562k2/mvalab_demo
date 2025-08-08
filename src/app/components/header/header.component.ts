import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      [class]="'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent')"
      [@slideIn]
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div
            class="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">M</span>
            </div>
            <span class="text-2xl font-bold text-white">MVA Lab</span>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a
              *ngFor="let item of navItems; let i = index"
              [href]="item.href"
              class="relative text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-primary-500/10 group"
              [@navItemAnimation]="{ value: '*', params: { delay: i * 100 + 'ms' } }"
              (mouseenter)="onNavHover(i, true)"
              (mouseleave)="onNavHover(i, false)"
            >
              <i [class]="item.icon + ' mr-2'"></i>
              {{ item.name }}
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors duration-300"
          >
            <i [class]="'fas ' + (isMobileMenuOpen ? 'fa-times' : 'fa-bars')"></i>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav
          *ngIf="isMobileMenuOpen"
          class="lg:hidden overflow-hidden mt-4"
          [@mobileMenuAnimation]
        >
          <div class="space-y-2 pb-4">
            <a
              *ngFor="let item of navItems"
              [href]="item.href"
              (click)="closeMobileMenu()"
              class="block text-gray-300 hover:text-primary-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary-500/10"
            >
              <i [class]="item.icon + ' mr-3'"></i>
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
    </header>
  `,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms ease-out', style({ transform: 'translateY(0%)' }))
      ])
    ]),
    trigger('navItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('{{ delay }} ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('mobileMenuAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  navItems = [
    { name: 'Khóa học', href: '#courses', icon: 'fas fa-graduation-cap' },
    { name: 'Giải pháp', href: '#solutions', icon: 'fas fa-cogs' },
    { name: 'Của hàng', href: '#products', icon: 'fas fa-shopping-cart' },
    { name: 'Blog', href: '#blog', icon: 'fas fa-blog' },
    { name: 'Về chúng tôi', href: '#about', icon: 'fas fa-info-circle' },
    { name: 'Đăng nhập', href: '#login', icon: 'fas fa-sign-in-alt' }
  ];

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onNavHover(index: number, isHovering: boolean) {
    // Add any hover effects here if needed
  }
}