import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {

  nextId: number = 7;
  form = new FormGroup({
    stock: new FormControl(0),
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quality: new FormControl(0),
    image: new FormControl(''),
  });

}
