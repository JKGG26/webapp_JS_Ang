//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  data: any = [];
  //data = this.productListService.getProductsList();

  constructor(private productListService: ProductListService){}
  ngOnInit() {
    this.productListService.getProductsList().subscribe(data => {
      this.data = data;
    });
  }
}
