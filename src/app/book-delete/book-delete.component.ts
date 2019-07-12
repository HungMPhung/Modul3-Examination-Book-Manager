import {Component, OnInit} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: IBook;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
      },
    error => {
      console.log(error);
      this.book = null;
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(
      next => {
        alert('Delete success!');
        this.router.navigate(['/books']);
      },
      error => console.log(error)
    ); }
}
