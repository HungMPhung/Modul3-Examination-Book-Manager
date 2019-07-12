import {Component, OnInit} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];

  constructor(
    private bookService: BookService
    ) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      next => (this.bookList = next),
      error => (this.bookList = [])
    );
    }
}

