import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


import {ProductService} from "../../../service/product.service";
import {Item} from "../../../models/product.model";

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

      this.router.navigate(['/base/productdetails',item.id]).then()
  }
}
