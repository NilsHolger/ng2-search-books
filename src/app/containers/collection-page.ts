import { Component, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Book } from '../models/book';


@Component({
  selector: 'app-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My Books</md-card-title>
    </md-card>

    <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
  `,

  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPageComponent {
  books$: Observable<Book[]>;

  constructor(store: Store<fromRoot.State>) {
    this.books$ = store.select(fromRoot.getBookCollection);
  }
}
