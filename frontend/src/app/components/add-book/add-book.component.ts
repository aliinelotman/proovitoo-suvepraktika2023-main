import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
book = []

addBookForm = this.formBuilder.group({
  title: '',
  author: ''
});

constructor(
  private formBuilder: FormBuilder,
) {}

    //TODO EI TÖÖTA book: Book
    save() {
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

    onSubmit(): void {
      this.addBookForm.reset();
    }
}
