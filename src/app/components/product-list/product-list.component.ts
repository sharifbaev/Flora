import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];

  ngOnInit() {
    // console.log(this.products);
  }

  trackById(item: any): any {
    return item.id;
  }
}
