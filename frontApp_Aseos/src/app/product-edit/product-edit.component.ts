import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if (!isNaN(productId)) {
      this.productService.getProductById(productId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    } else {
      console.error('Invalid product ID');
    }
  }

  onSubmit() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }

  deleteProduct() {
    if (confirm('¿Estás seguro de querer eliminar este producto?')) {
      this.productService.deleteProduct(this.product.id).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error deleting product', error);
        }
      );
    }
  }
}