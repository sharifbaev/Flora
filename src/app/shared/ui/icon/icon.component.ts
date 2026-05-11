import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'icon',
  templateUrl: './icon.component.html',
  imports: [
    LucideAngularModule,
    NgClass
  ]
})
export class IconComponent {
  @Input() name!: string;
  @Input() stroke: number = 2;
  @Input() size!: 'xsm' | 'sm' | 'md' | 'lg';
  @Input() class: string = '';
  @Input() color: 'primary' | 'accent' | 'danger' | 'grey' | 'default' = 'default';
  @Input() active: boolean = false;

  get colorClass(): string {
    switch (this.color) {
      case 'primary':
        return 'text-primary';
      case 'accent':
        return 'text-accent';
      case 'danger':
        return 'text-danger';
      case 'grey':
        return 'text-grey';
      default:
        return '';
    }
  }

  get iconSize(): number {
    switch (this.size) {
      case 'xsm':
        return 14;
      case 'sm':
        return 16;
      case 'md':
        return 20;
      case 'lg':
        return 24;
      default:
        return 20;
    }
  }

  get wrapperClass(): string {
    if (this.active && this.name === 'heart') {
      return 'bg-red-500 text-white';
    }
    return 'bg-white';
  }
}
