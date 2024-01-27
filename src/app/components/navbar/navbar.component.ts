import { Component,ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NavbarComponent {
  constructor (private router:Router, private authService: AuthService, private productService: ProductService) {}
  goToList()
  {
    this.router.navigate(['/base/productlist']).then()
  }

 goToCart(){
    this.router.navigate(['/base/addtocart']).then()
 }
  goToDetails()
  {
    this.router.navigate(['/base/productDetails']).then()
  }
  goToAdmin()
  {
    this.router.navigate(['/base/admin']).then()
  }
  signOut(){
  this.authService.singout();
  this.router.navigate(["/login"])
}



}
