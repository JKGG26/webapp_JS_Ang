import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],//, ProductListComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontApp';
}
