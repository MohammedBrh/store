import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces/item';
import { products } from 'src/mockData';
import { CarteService } from 'src/service/carte.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private carteService: CarteService) {

  }
  items: Item[] = [];
  ngOnInit() {
    this.carteService.cartItems$.subscribe(items => {
      this.items = items; // Update items whenever the cart changes
    });

  }
  remove(id: number) {
    this.carteService.removeItem(id);
  }
}