import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from './material/material.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutListComponent } from './components/checkout-list/checkout-list.component';
import { ClickableClickModule } from 'angular-clickable-click';
import { MycheckoutComponent } from './components/mycheckout/mycheckout.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent,
    CheckoutListComponent,
    MycheckoutComponent

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule, //From: https://github.com/michaelbromley/ngx-pagination
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClickableClickModule, //From: https://github.com/DanielKucal/angular-clickable-click
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
