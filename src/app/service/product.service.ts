import { Injectable } from '@angular/core';
import {Item} from "../models/product.model";
import {collection, deleteDoc, doc, Firestore, getDoc, onSnapshot, setDoc} from "@angular/fire/firestore";
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
    onSnapshot(collection(this.fproduct,'listcart'),(snapshot)=>{
      this.listItemInCart =[];
      snapshot.forEach((doc)=>{
        this.listItemInCart.push(doc.data()as Item)
        console.log(this.listItemInCart)
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
  async addItemToCart(newItem: Item) {
    const docRef = doc(this.fproduct, 'listcart', newItem.id.toString());

    try {
      // Kiểm tra xem tài liệu đã tồn tại trong giỏ hàng chưa
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // Nếu tồn tại, tăng quantity lên 1
        const currentQuantity = parseInt(docSnapshot.data()['quality'] || 0);
        await setDoc(docRef, { ...newItem, quality: currentQuantity + 1 });
      } else {
        // Nếu chưa tồn tại, thêm vào giỏ hàng
        await setDoc(docRef, newItem);
      }

      console.log("Đã thêm sản phẩm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  }

  addToDetail(item: Item)
  {
    this.detailItem = item
  }
  async updateItem(item: Item)
  {
    await setDoc(doc(this.fproduct,'listproduct', item.id.toString()),item)
  }

  getById(id:string){
  const product = this.listItem.find((product) => product.id === id);
  return product || {};
  }

}

