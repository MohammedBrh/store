import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/interfaces/item';
import { products } from 'src/mockData';
import { CarteService } from 'src/service/carte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: Item[] = [];
  pageSize = 10;
  pageNum = 0;
  ARRAY_OPTIONS = [5, 10, 25, 100];
  arrayOptions = [0];
  length = products.length;
  constructor(private carteService: CarteService,private router: Router) {

    // length = products.length;
    this.items = this.getItems(this.pageNum,this.pageSize);
    this.arrayOptions = [...this.ARRAY_OPTIONS.filter(elm => (elm < products.length))]

  }
  Add(id: number) {
    this.carteService.addItem(this.items[id - 1])
  }
  onPageChange(event: any): void {
    this.pageNum = event.pageIndex;
    this.pageSize = event.pageSize;
    // this.arrayOptions = [...this.ARRAY_OPTIONS.filter(elm => (elm < products.length))];
    this.items = this.getItems(this.pageNum,this.pageSize);
  }
  getItems(pageNum:number,pageSize : number){
   return products.slice(pageNum * pageSize , (pageNum  + 1)* pageSize);
  }

  viewArticleById(id: number): void {
    debugger
    this.router.navigate(['/article', id]); // Navigate to the article details page
  }
}
