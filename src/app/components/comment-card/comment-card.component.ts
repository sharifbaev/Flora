import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormatDatePipe } from '../../shared/pipes/format-date.pipe';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  imports: [
    LucideAngularModule,
    FormatDatePipe,
    NgForOf
  ],
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  @Input() comment!: any;

  getStarArray(rating: number) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const diff = rating - (i - 1);

      let fill = 0;

      if (diff >= 1) {
        fill = 100; // full star
      } else if (diff > 0) {
        fill = diff * 100; // partial
      }

      stars.push({ fill });
    }

    return stars;
  }
}
