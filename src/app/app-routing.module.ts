import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent } ,// display article
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home by default
  { path: '**', redirectTo: '/home' },// Handle undefined routes and redirect it to Home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
