import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BehaviorSubject, filter, Observable, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Page } from '../../models/page';
import { Book } from '../../models/book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$!: Observable<Page<Book>>;
  books: any = [];
  sortingDirection: 'asc' | 'desc' | '' = "";
  p: number = 1; //pagination
  searchInput = "";






  constructor(
    private bookService: BookService
  ) {
  }


  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    // Implementing table of books view using backend api endpoint /getBooks, support for paging and sorting
    this.books$ = this.bookService.getBooks({ pageIndex:0,pageSize:999,sort:'genre',direction:'asc'}); //KUIDAS BOOK STATUS FILTER TÖÖLE SAADA: status:this.books.status='AVAILABLE'


  }

searchBooks() {
  console.log(this.searchInput)
  console.log(this.books.filter(this.searchInput))
}



}
