import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { filter, Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Title } from '@angular/platform-browser';



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





  constructor(
    private bookService: BookService,
  ) {
  }


  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.

    this.books$ = this.bookService.getBooks({ pageIndex:0,pageSize:999,sort:'genre',direction:'asc'});


  }





}
