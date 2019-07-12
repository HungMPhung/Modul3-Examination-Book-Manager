import {Component, OnInit} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book = {
      id: 0,
      title: '',
      author: '',
      description: ''
    };
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      });
  }

}
