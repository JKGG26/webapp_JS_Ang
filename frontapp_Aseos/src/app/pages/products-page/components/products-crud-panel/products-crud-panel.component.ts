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
  nameValue: string = '';
  descriptionValue: string = '';
  priceValue: number = 0;
  stockValue: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.show_products();
  }

  show_product() {
    this.productsService.get_product(this.idValue);
  }

  show_products() {
    this.productsService.get_products();  
  }

  delete_product() {
    this.productsService.delete_product(this.idValue)
  }

  edit_product() {

  }

  create_product() {
    // Crea un objeto con los valores de los inputs  
    let jsonData = {
      'nombre': this.nameValue,
      'descripcion': this.descriptionValue,
      'precio': this.priceValue,
      'stock': this.stockValue
    };

    this.productsService.create_product(jsonData)
  }

  clean_inputs() {
    this.idValue = 0;
    this.nameValue = '';
    this.descriptionValue = '';
    this.priceValue = 0;
    this.stockValue = 0;
  }
}
