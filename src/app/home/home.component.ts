import { Component } from '@angular/core';
import { Item } from 'src/interfaces/item';
import { products } from 'src/mockData';
import { CarteService } from 'src/service/carte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   items:Item[] = products;
  constructor(private carteService:CarteService){

  }
  Add(id : number){
    this.carteService.addItem(this.items[id - 1])
  }
}
