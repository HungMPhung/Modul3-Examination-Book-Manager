import {Component, OnInit} from '@angular/core';
import {IBook} from '../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: ['']
      }
    );
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      });
  }

  editBook() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.updateBook(data).subscribe(
        next => {
          alert('Edit success!');
          this.bookForm.reset();
        },
        error => (console.log(error))
      );
    }
  }
}
