import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from './material/material.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutListComponent } from './components/checkout-list/checkout-list.component';
import { MycheckoutComponent } from './components/mycheckout/mycheckout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalComponent } from './modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { LateCheckoutsComponent } from './components/late-checkouts/late-checkouts.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent,
    CheckoutListComponent,
    MycheckoutComponent,
    ModalComponent,
    LateCheckoutsComponent,
    FavoritesListComponent

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule, //From: https://github.com/michaelbromley/ngx-pagination
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdbModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
