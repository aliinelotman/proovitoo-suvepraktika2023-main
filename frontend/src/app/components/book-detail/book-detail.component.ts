import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [MdbModalService],
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;
  book: any = [];


  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private modalService: MdbModalService
  ) {}

  // Implement individual book view and CRUD
  ngOnInit(): void {
    this.book$ = this.route.params
      .pipe(map((params) => params['id']))
      .pipe(switchMap((id) => this.bookService.getBook(id)));
  }

  //TODO EI TÖÖTA
  save(book: Book) {
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
      comment: book.comment,
    };
    this.bookService.saveBook(body).subscribe((res) => {
      console.log(res);
    });
  }

  //delete book
  remove(book: Book) {
    let id = book.id;
    this.bookService.deleteBook(id).subscribe((res) => {
      console.log(res);
    });
  }

  // checking out and returning books
  changeStatus(book: Book) {
    if (book.status === 'AVAILABLE') {
      console.log('checkout');
      let body = {
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre,
        year: book.year,
        added: book.added,
        checkOutCount: book.checkOutCount,
        status: (book.status = 'BORROWED'),
        dueDate: book.dueDate,
        comment: book.comment,
      };
    } else {
      console.log('return');
      let body = {
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre,
        year: book.year,
        added: book.added,
        checkOutCount: book.checkOutCount,
        status: (book.status = 'AVAILABLE'),
        dueDate: book.dueDate,
        comment: book.comment,
      };
      this.bookService.saveBook(book).subscribe((res) => {
        console.log(res);
      });
      window.location.reload();
    }
  }


  //Confirmation dialogue modal
  openModal() {
    console.log('modal');
    this.modalRef = this.modalService.open(ModalComponent);
  }


  //Saving favorite books for current user in localStorage
  favorite(book: Book): void{
    let favoriteBooks = JSON.parse(localStorage.getItem("favorites") || "[]");
    favoriteBooks.push(book);
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
    console.log("favorites:", localStorage)
    }
  


}
