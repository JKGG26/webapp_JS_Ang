import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-crud-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './products-crud-panel.component.html',
  styleUrl: './products-crud-panel.component.css'
})
export class ProductsCrudPanelComponent implements OnInit {

  idValue: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.show_products();
  }

  show_products() {
    this.productsService.get_products();  
  }

  show_product() {
    this.productsService.get_product(this.idValue);
  }
}
