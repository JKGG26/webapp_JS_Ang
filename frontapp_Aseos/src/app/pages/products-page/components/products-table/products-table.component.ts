import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit {

  data: any = [];

  constructor(private productsService: ProductsService) {}
  // ngOnInit(){
  //   this.productsService.get_products().subscribe(data => {
  //     this.data = data;
  //   }
  // ); 
  // }
  ngOnInit(){
    console.log('HERE')
    this.productsService.current_data_table.subscribe(data => {
      this.data = data
    });
  }
}
