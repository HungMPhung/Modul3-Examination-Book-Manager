import {Component, OnInit} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: IBook;
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: ['']
      }
    );
  }

  createBook() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value).subscribe(
        next => {
          alert('add success!');
          this.bookForm.reset();
        },
        error => (console.log(error))
      );
    }
  }
}
