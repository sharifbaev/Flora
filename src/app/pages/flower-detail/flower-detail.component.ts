import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DATA } from '../../data';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { SpaceNumberPipe } from '../../shared/pipes/space-number.pipe';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { LucideAngularModule } from 'lucide-angular';
import { CommentCardComponent } from '../../components/comment-card/comment-card.component';
import { comment } from 'postcss';

@Component({
  standalone: true,
  selector: 'flower-detail',
  templateUrl: './flower-detail.component.html',
  imports: [
    NgOptimizedImage,
    NgIf,
    SpaceNumberPipe,
    NgForOf,
    NgClass,
    IconComponent,
    LucideAngularModule,
    CommentCardComponent
  ],
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  flower!: any
  count: number = 1
  selectedSize: string | null = null;
  sizes = [
    { key: 'small', label: 'Малый' },
    { key: 'medium', label: 'Средний' },
    { key: 'large', label: 'Большой' },
    { key: 'vip', label: 'VIP' }
  ];

  ngOnInit() {
    this.flower = this.data[this.route.snapshot.params['id']]
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  setCount(type: string = 'add' || 'minus') {
    if (type === 'minus' && this.count > 0) {
      this.count--;
    } else if (type === 'add') {
      this.count++;
    }
  }

  protected readonly data = DATA.products;
  protected readonly comment = comment;
}
