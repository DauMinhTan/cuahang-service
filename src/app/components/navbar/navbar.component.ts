import { Component,ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NavbarComponent {
  constructor (private router:Router) {}
  goToList()
  {
    this.router.navigate(['/productList']).then()
  }

 goToCart(){
    this.router.navigate(['/cart']).then()
 }
  goToDetails()
  {
    this.router.navigate(['/productDetails']).then()
  }
  goToAdmin()
  {
    this.router.navigate(['/admin']).then()
  }


}
