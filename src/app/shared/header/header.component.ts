import { Component, HostListener } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    IconComponent,
    RouterOutlet
  ],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isOpen = false;

  toLogin() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.toggleBodyScroll();
  }

  closeMenu() {
    this.isOpen = false;
    this.toggleBodyScroll();
  }

  toggleBodyScroll() {
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeMenu();
  }
}
