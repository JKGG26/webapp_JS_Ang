import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from './product-detail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit{
  data: any = [];
  numberValue: number = 1;

  constructor(private productDetailService: ProductDetailService){}
  ngOnInit() {
    this.productDetailService.getProduct(this.numberValue).subscribe(data => {
      this.data = data;
    });
  }

  sendNumber() {
    if (this.numberValue) {
      this.productDetailService.getProduct(this.numberValue).subscribe(data => {
        this.data = data;
      });
    }
  }
}