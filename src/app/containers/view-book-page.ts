import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';
import * as book from '../actions/book';


@Component({
  selector: 'app-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-book-page></app-selected-book-page>
  `
})
export class ViewBookPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .map(id => new book.SelectAction(id))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
