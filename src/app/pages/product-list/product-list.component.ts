import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {item} from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productList :item[]=[]
  constructor(private listProduct: ProductService) {}
  ngOnInit() {
   this.productList = this.listProduct.itemlist;
  }

}
