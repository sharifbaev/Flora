import { Component } from '@angular/core';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { DATA } from '../../data'
import { NgClass, NgForOf } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { SpaceNumberPipe } from 'src/app/shared/pipes/space-number.pipe';

@Component({
  selector: 'product-filters',
  standalone: true,
  templateUrl: './product-filters.component.html',
  imports: [
    IconComponent,
    NgForOf,
    NgClass,
    SliderModule,
    FormsModule,
    SpaceNumberPipe
  ],
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent {
  data = DATA
  selectedMarkets: number[] = [];
  selectedTypes: number[] = [];
  allSelected = true;
  priceRange: number[] = [100, 1000000];

  toggleMarket(marketId: number) {
    this.allSelected = false;

    const index = this.selectedMarkets.indexOf(marketId);

    if (index > -1) {
      this.selectedMarkets.splice(index, 1);
    } else {
      this.selectedMarkets.push(marketId);
    }

    if (this.selectedMarkets.length === 0) {
      this.allSelected = true;
    }
  }

  toggleFlower(typeId: number) {
    const index = this.selectedTypes.indexOf(typeId);
    if (index > -1) {
      this.selectedTypes.splice(index, 1);
    } else {
      this.selectedTypes.push(typeId);
    }
  }

  selectAll() {
    this.selectedMarkets = [];
    this.allSelected = true;
  }
}
