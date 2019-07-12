import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {NgModule} from '@angular/core';
import {BookAddComponent} from './book-add/book-add.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [{
  path: 'books',
  component: BookComponent
}, {
  path: 'book/:id',
  component: BookDetailComponent
}, {
  path: 'book/:id/edit',
  component: BookEditComponent
}, {
  path: 'book-add',
  component: BookAddComponent
}, {
  path: 'book/:id/delete',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
