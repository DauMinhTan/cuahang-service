import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Item} from "../../../models/product.model";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
constructor(public productService: ProductService, private router:Router, private rote: ActivatedRoute) {

}
itemDetail: any
ngOnInit() {
  let id =this.rote.snapshot.params['id'];
  this.itemDetail = this.productService.getById(id)
}



  addtocart(item: Item)
  {

    this.productService.addItemToCart(item)
    this.router.navigate(['/base/addtocart']).then()

  }
}
