import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {

  private months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];

  transform(value: string | number | Date, format: 'short' | 'long' = 'short'): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) return '';

    const day = this.pad(date.getDate());
    const monthIndex = date.getMonth();
    const month = this.months[monthIndex];
    const year = date.getFullYear();

    if (format === 'long') {
      return `${day} ${month} ${year}`;
    }

    return `${day}.${this.pad(monthIndex + 1)}.${year}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }
}
