import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CheckoutListComponent } from './components/checkout-list/checkout-list.component';
import { MycheckoutComponent } from './components/mycheckout/mycheckout.component';
import { LateCheckoutsComponent } from './components/late-checkouts/late-checkouts.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'books/:id', component: BookDetailComponent},
  {path: 'checkout', component: CheckoutListComponent},
  {path: 'checkout/:id', component: MycheckoutComponent},
  {path: 'late-checkouts', component: LateCheckoutsComponent},
  {path: 'favorites', component: FavoritesListComponent},
  {path: 'addbook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
