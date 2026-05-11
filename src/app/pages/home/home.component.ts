import { Component } from '@angular/core';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { NgClass, NgIf } from '@angular/common';
import { DATA } from '../../data';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    ProductFiltersComponent,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ProductListComponent,
    NgClass,
    NgIf
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedCity: any;
  isFilterOpen: boolean = false;

  cities = [
    { name: 'По популярности', code: 'popular' },
    { name: 'По цене (по убыванию)', code: 'price_cheap' },
    { name: 'По цене (по возрастанию)', code: 'price' },
  ];

  openFilters(): void {
    this.isFilterOpen = true;
  }

  closeFilters(): void {
    this.isFilterOpen = false;
  }

  protected readonly products = DATA.products;
}
