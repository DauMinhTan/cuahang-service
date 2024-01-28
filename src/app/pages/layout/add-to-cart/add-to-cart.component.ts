import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Item} from "../../../models/product.model";
import {TuiButtonModule} from "@taiga-ui/core";
import {SharedModule} from "../../../../shared/shared.module";

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButtonModule,
      SharedModule
    ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent implements OnInit{
  constructor(public productService: ProductService) {}

  showDialogBill = false;
  showDialog(){
    this.showDialogBill = true
  }
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
  buy(){
    alert(' Ban đã mua hàng thành công')
    this.productService.listItemInCart = []
    this.showDialogBill = false
  }
}
