import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'product-list', component: ProductListComponent},
    {path: 'product-detail', component: ProductDetailComponent},
    {path: 'product-create', component: ProductCreateComponent},
    {path: 'product-edit', component: ProductEditComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];
