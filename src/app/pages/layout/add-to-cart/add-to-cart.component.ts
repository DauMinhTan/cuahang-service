import {Component, OnInit} from '@angular/core';
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
export class AddToCartComponent implements OnInit{
  constructor(public productService: ProductService) {}

  totalBill(){
    let total = 0
    for (let i = 0; i< this.productService.listItemInCart.length; i++){
      total += this.productService.listItemInCart[i].price * this.productService.listItemInCart[i].quality
    }
    return total;
  }
  ngOnInit() {
    this.totalBill()
  }

  plus(item:Item){
    if (item.quality < item.stock)
    {
      this.productService.addItemToCart(item)

    }else {
      alert('Số lượng nhiều mua hơn số lượng tồn kho')
    }
  }
  misus(item: Item){
    if (item.quality > 1)
    {
      this.productService.deleteItemToCart(item)

    }else {
      alert('Số lượng phải nhiều hơn 1')
    }
  }
  deleteItemCart(item: Item){
    this.productService.deleteItemCart(item)
  }
}
