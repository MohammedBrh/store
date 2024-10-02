import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces/item';
import { CarteService } from 'src/service/carte.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private carteService:CarteService){
    
  }
  items:Item[] = []
  ngOnInit(){
    this.carteService.cartItems$.subscribe(items => {
      this.items = items; // Update items whenever the cart changes
    });
  }
}
