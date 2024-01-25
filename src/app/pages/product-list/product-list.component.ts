import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Item} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  constructor(public productservice: ProductService, private router: Router) {}
  ngOnInit() {
  }

  addToDetail(item: Item)
  {
    this.productservice.addToDetail(item)
      this.router.navigate(['/productDetails']).then()
  }
}
