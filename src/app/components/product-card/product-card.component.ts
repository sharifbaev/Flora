import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { SpaceNumberPipe } from '../../shared/pipes/space-number.pipe';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  imports: [
    NgOptimizedImage,
    IconComponent,
    NgIf,
    SpaceNumberPipe
  ],
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(private router: Router) {}
  @Input() product: any;

  isFavorite = false;

  getDetail(flower: any) {
    this.router.navigate(['/flower', flower.id]);
  }
}
