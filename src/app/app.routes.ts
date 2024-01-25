import { Routes } from '@angular/router';
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {AddToCartComponent} from "./pages/add-to-cart/add-to-cart.component";
import {AdminComponent} from "./pages/admin/admin.component";


export const routes: Routes = [
  {
    path: 'productDetails',
    component: ProductDetailsComponent,
  },
  {
    path: 'productList',
    component: ProductListComponent,

  },
  {
    path: 'cart',
    component: AddToCartComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    component: ProductListComponent,
  }
];

