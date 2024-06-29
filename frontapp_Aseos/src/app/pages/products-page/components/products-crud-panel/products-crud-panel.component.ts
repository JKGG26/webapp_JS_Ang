import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-crud-panel',
  standalone: true,
  imports: [],
  templateUrl: './products-crud-panel.component.html',
  styleUrl: './products-crud-panel.component.css'
})
export class ProductsCrudPanelComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.show_products();
  }

  show_products() {
    this.productsService.set_data_table();  
  }
}
