import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  product = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.productService.createProduct(this.product).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error creating product', error);
      }
    );
  }
}