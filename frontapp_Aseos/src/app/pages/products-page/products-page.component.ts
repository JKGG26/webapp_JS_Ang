import { Component } from '@angular/core';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsCrudPanelComponent } from './components/products-crud-panel/products-crud-panel.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductsTableComponent,
    ProductsCrudPanelComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
