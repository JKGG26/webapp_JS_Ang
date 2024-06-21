import { Component, OnInit } from '@angular/core';
import { ProductEditService } from './product-edit.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';  

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})

export class ProductEditComponent implements OnInit{
  data: any = [];
  numberValue: number = 1;

  idValue: number = 1;
  nameValue: String = '';
  descriptionValue: String = '';
  priceValue: number = 0.0;
  stockValue: number = 0;

  constructor(private productEditService: ProductEditService, private cd: ChangeDetectorRef){}
  ngOnInit() {
    this.productEditService.getProduct(this.numberValue).subscribe(data => {
      this.data = data;
    });
  }

  sendNumber() {
    if (this.numberValue) {
      this.productEditService.getProduct(this.numberValue).subscribe(data => {
        this.data = data;
      });
    }
  }

  updateProduct() {
    // Crea un objeto con los valores de los inputs  
    let jsonData = {
      'id': this.numberValue,
      'nombre': this.nameValue,
      'descripcion': this.descriptionValue,
      'precio': this.priceValue,
      'stock': this.stockValue
    };

    this.productEditService.updateProduct(this.numberValue, jsonData);
    this.sendNumber();
  }
}
