import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable, tap } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  bookCount: number = 15;
  books$!: Observable<Page<Book>>;
  books: any = [];
  sortingDirection: 'asc' | 'desc' | '' = "";
  sortingAttribute: string = "genre";
  pageIndex: number = 1; //pagination
  pageLength: number = 15;
  searchInput = "";

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    // TODO  book status filter mujale, Pageable ei lase siia teha (this observable should emit books taking into consideration pagination, sorting and filtering options.)
    // Implementing table of books view using backend api endpoint /getBooks, support for paging and sorting
    this.books$ = this.bookService
    .getBooks({
      pageIndex: this.pageIndex,
      pageSize: this.pageLength,
      sort: this.sortingAttribute,
      direction: this.sortingDirection
    })
    .pipe(
      tap((e) => {
            this.bookCount = e.totalElements;
            console.log(this.bookCount, e.totalElements);
          }
      )
    );
}


searchBooks() {
  console.log(this.searchInput)
  console.log(this.books.filter(this.searchInput))
}

  
}
