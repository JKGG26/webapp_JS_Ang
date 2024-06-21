import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

export const routes: Routes = [
    { path: 'products/create', component: ProductCreateComponent },
    { path: 'products/:id/edit', component: ProductEditComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products', component: ProductListComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
];