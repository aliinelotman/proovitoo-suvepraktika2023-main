import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  template: `
    <div (click)="isDisabled = true" [disabled]="isDisabled">
    I am <b *ngIf="isDisabled">no longer</b> clickable
    </div>
  `

})
export class BooksListComponent implements OnInit {

  books$!: Observable<Page<Book>>;
  books: any = [];
  sortingDirection: 'asc' | 'desc' | '' = "";
  public isDisabled: boolean = false; //pointer cursor
  p: number = 1; //pagination
  //TODO: fix pagination input data




  constructor(
    private bookService: BookService,
    private http: HttpClient,
  ) {
  }


  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks({});


  }

  private getBooks() {
    this.http.get<any>("http://localhost:8080/getBooks").subscribe(res =>
    this.books = res);

  }


  sort(key: string){
   const newSortingDirection = this.sortingDirection === ""
    ?"asc"
    : this.sortingDirection === "asc"
      ?"desc"
      : "";
    this.sortingDirection = newSortingDirection;
    this.books$=this.bookService.getBooks({
      direction:newSortingDirection,
      sort:key
    })
  }



}
