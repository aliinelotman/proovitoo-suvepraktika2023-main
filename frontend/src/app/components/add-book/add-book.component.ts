import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  //books = Book[] = []

  addBookForm = this.formBuilder.group({
    title: '',
    author: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  //TODO EI TÖÖTA
  save(addBookForm: NgForm) {
    // const val = addBookForm.value;
    //const newBook = new Book(val.id, val.title, val.author, val.genre);
    // this bookService.saveBook(newBook).subscribe();
  }

  onSubmit(): void {
    this.addBookForm.reset();
  }
}
