import { Component } from '@angular/core';
import { ProductsTableComponent } from './components/products-table/products-table.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductsTableComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
