import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor (private router:Router) {}
  goToList()
  {
    this.router.navigate(['/productList']).then()
  }

 addToCart(){
    this.router.navigate(['/addToCart']).then()
 }
  goToDetails()
  {
    this.router.navigate(['/productDetails']).then()
  }
}
