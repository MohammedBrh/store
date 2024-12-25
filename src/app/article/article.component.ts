import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/mockData';
import { CarteService } from 'src/service/carte.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  item :any;
  rating: number = 0; // Input to accept the rating value
  maxRating: number = 5; // Maximum number of stars
  stars: boolean[] = []; 

  constructor(private route: ActivatedRoute,private carteService: CarteService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = products.find(a => a.id === id); // Fetch article by ID
    this.rating = this.item.rating;
    this.stars = Array.from({ length: this.maxRating }, (_, index) => index < this.rating);
    debugger;
  }
  
  Add(id: number) {
    this.carteService.addItem(this.item);
  }
}
