import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Item} from "../../../models/product.model";
@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  constructor(public productService: ProductService) {}
  result = 0

  totalBill(){
    let total = 0
    for (let i = 0; i< this.productService.listItemInCart.length; i++){
      total += this.productService.listItemInCart[i].price * this.productService.listItemInCart[i].quality
    }
    total = this.result

    return total;
  }
}
