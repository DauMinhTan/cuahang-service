import { Injectable } from '@angular/core';
import {Item} from "../models/product.model";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc} from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fproduct: Firestore) {
    onSnapshot(collection(this.fproduct,'listproduct'),(snapshot)=>{
      this.listItem =[];
      snapshot.forEach((doc)=>{
        this.listItem.push(doc.data()as Item)
        console.log(this.listItem)
      })
    })
  }
  listItem:Item[]=[];
listItemInCart: Item[]=[]
detailItem: Item | undefined

  async add(item: Item){
    await setDoc(doc(this.fproduct,'listproduct',item.id.toString()),item)
  }

  async deleteItem(item:Item){
    await deleteDoc(doc(this.fproduct,'listproduct' ,item.id.toString()))
  }
  async addItemToCart(item: Item){
    await setDoc(doc(this.fproduct,'listcart',item.id.toString()),item)
  }
  async getCartList()
  {
    onSnapshot(collection(this.fproduct,'listcart'),(snapshot)=>{
      this.listItemInCart =[];
      snapshot.forEach((doc)=>{
        this.listItemInCart.push(doc.data()as Item)
        console.log(this.listItemInCart)
      })
    })
  }
  addToDetail(item: Item)
  {
    this.detailItem = item
  }
  async updateItem(item: Item)
  {
    await setDoc(doc(this.fproduct,'listproduct', item.id.toString()),item)
  }
}

