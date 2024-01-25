import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Item} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
constructor(public productService: ProductService, private router:Router) {
}

itemDetail= this.productService.detailItem
  addProductToCart(item: Item)
  {
    this.productService.addItemToCart(item)
    this.router.navigate(['/cart']).then()

  }
}
