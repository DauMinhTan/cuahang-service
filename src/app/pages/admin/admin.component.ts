import {ChangeDetectorRef, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {Item} from "../../models/product.model";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {update} from "@angular/fire/database";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {
  @ViewChild('dialogUpdate', { static: true })
  cartDialog!: ElementRef<HTMLDialogElement>;
  cartCdr = inject(ChangeDetectorRef);
  openCartDialog(item: Item) {
    this.updateForm.patchValue(item)
    Animation;
    this.cartDialog.nativeElement.showModal();
    this.cartCdr.detectChanges();
  }

  closeCartDialog() {
    this.cartDialog.nativeElement.close();
    this.cartCdr.detectChanges();

  }
constructor(public productService: ProductService) {
}


  form  = new FormGroup({
    stock: new FormControl(0),
    id: new  FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new  FormControl(0),
    quality: new  FormControl(0),
    image: new  FormControl(''),
  });
  submit(){
    let newForm : Item = {

      id: Math.floor(Math.random()*1000).toString() ,
      stock: this.form.value.stock || 0,
      name : this.form.value.name || '',
      description : this.form.value.description || '',
      price : this.form.value.price  || 0,
      image : this.form.value.image || '',
      quality : this.form.value.quality || 0,
    }
    this.addItem(newForm)
  }
  addItem(item:Item){
    this.productService.add(item)
  }
  deleteProduct(item:Item){
    this.productService.deleteItem(item)
    console.log(item)
  }

  updateForm  = new FormGroup({
    stock: new FormControl(0),
    id: new  FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new  FormControl(0),
    quality: new  FormControl(0),
    image: new  FormControl(''),
  });
  updateSubmit(){
    let newUpdateForm : Item = {

      id: this.updateForm.value.id || '' ,
      stock: this.updateForm.value.stock || 0,
      name : this.updateForm.value.name || '',
      description : this.updateForm.value.description || '',
      price : this.updateForm.value.price  || 0,
      image : this.updateForm.value.image || '',
      quality : this.updateForm.value.quality || 0,
    }
    this.productService.updateItem(newUpdateForm)
    this.closeCartDialog()
    console.log(newUpdateForm)
  }
}
