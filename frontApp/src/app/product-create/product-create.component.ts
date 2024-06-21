import { Component} from '@angular/core';
import { ProductCreateService } from './product-create.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';  

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})

export class ProductCreateComponent {
  data: any = [];

  numberValue: number = 0;
  nameValue: String = '';
  descriptionValue: String = '';
  priceValue: number = 0.0;
  stockValue: number = 0;

  constructor(private productCreateService: ProductCreateService, private cd: ChangeDetectorRef){}

  sendNumber() {
    if (this.numberValue && this.numberValue >= 1) {
      this.productCreateService.getProduct(this.numberValue).subscribe(data => {
        this.data = data;
      });
    }
  }

  countProducts() {
    this.productCreateService.getProducts().subscribe(data => {
      this.numberValue = data.length + 1;
    });
  }

  createProduct() {
    console.log(this.numberValue)
    // Crea un objeto con los valores de los inputs  
    let jsonData = {
      'nombre': this.nameValue,
      'descripcion': this.descriptionValue,
      'precio': this.priceValue,
      'stock': this.stockValue
    };

    this.productCreateService.createProduct(jsonData);
    this.countProducts();
    this.sendNumber();
  }

  delProduct() {
    if (this.numberValue && this.numberValue >= 1) {
      this.productCreateService.deleteProduct(this.numberValue);
    }
  }
}
