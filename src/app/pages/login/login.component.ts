import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router, withInMemoryScrolling} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private authService:AuthService, private router: Router) {
}
  login(){
  this.authService.signIn()
  // this.router.navigate(["/base/productlist"])
}
}
