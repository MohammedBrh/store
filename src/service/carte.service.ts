import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { inject } from '@angular/core';
import { Item } from 'src/interfaces/item';
import { products } from 'src/mockData';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
 // BehaviorSubject to hold the cart items and allow subscriptions for changes

  private _snackBar = inject(MatSnackBar);
 private cartItemsSubject = new BehaviorSubject<Item[]>([]);
 durationInSeconds = 5;
 cartItems$ = this.cartItemsSubject.asObservable();

 constructor() { }

 // Get current cart items
 getCartItems(): Item[] {
   return this.cartItemsSubject.value;
 }

 // Add an item to the cart
 addItem(item: Item): void {
   const currentItems = this.getCartItems();
   if(currentItems.length < 5){
     const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
     const itemQuantity = item.quantity ?? 1;
  
     if (existingItemIndex >= 0) {
      currentItems[existingItemIndex].quantity = (currentItems[existingItemIndex].quantity ?? 0) + itemQuantity;
    } else {
      // Ensure quantity is defined when adding a new item
      currentItems.push({
        ...item,
        quantity: itemQuantity // Use the default or provided quantity
      });
      
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { message: 'L\'article est ajouté dans le panier' }, 
      duration: this.durationInSeconds * 1000,
    });
    }
     this.cartItemsSubject.next([...currentItems]); // Update the cart items and notify listeners
   }
 }

 // Remove an item from the cart
 removeItem(itemId: number): void {
   const currentItems = this.getCartItems().filter(item => item.id !== itemId);
   this.cartItemsSubject.next([...currentItems]); // Update the cart items and notify listeners
 }

 // Clear the cart
 clearCart(): void {
   this.cartItemsSubject.next([]); // Clear the cart and notify listeners
 }
}
