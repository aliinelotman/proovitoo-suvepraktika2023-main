import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;
  book: any = [];


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService

  ) {
  }

  // Implement individual book view and CRUD
  ngOnInit(): void {
    this.book$ = this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap(id => this.bookService.getBook(id)))

  }

  //update book support
  save(book: Book){
    let body = {
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      year: book.year,
      added: book.added,
      checkOutCount: book.checkOutCount,
      status: book.status,
      dueDate: book.dueDate,
      comment: book.comment
    }
    this.bookService.saveBook(body)
      .subscribe(res => {
        console.log(res)
      })
}

//delete book
remove(book: Book){
  let id = book.id;
  this.bookService.deleteBook(id)
    .subscribe(res => {
      console.log(res)
    })
  }

  // checking out and returning books
  changeStatus(book: Book){
      if (book.status === "AVAILABLE") {
        console.log("checkout")
        let body = {
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre,
        year: book.year,
        added: book.added,
        checkOutCount: book.checkOutCount,
        status: book.status = "BORROWED",
        dueDate: book.dueDate,
        comment: book.comment
      }
     } else {
      console.log("return")
          let body = {
            id: book.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            year: book.year,
            added: book.added,
            checkOutCount: book.checkOutCount,
            status: book.status = "AVAILABLE",
            dueDate: book.dueDate,
            comment: book.comment
        }
        this.bookService.saveBook(book)
      .subscribe(res => {
        console.log(res)
      })
        window.location.reload()
      }
  }

  test(){
    console.log("TEST")
  }



}
