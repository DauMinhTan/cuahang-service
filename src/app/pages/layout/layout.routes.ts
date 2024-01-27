import {Routes} from "@angular/router";
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";
import {AdminComponent} from "./admin/admin.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {LayoutComponent} from "./layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'addtocart',
        component: AddToCartComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'productlist',
        component: ProductListComponent,
      },
      {
        path: 'productdetails/:id',
        component: ProductDetailsComponent,
      },
    ]
  }

]
