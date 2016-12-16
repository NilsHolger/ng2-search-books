import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';


@Component({
  selector: 'book-collection-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async">
        <app-nav-item (activate)="closeSidenav()" routerLink="/" icon="book" hint="View your Books ... ">
          My Books
        </app-nav-item>
        <app-nav-item (activate)="closeSidenav()" routerLink="/search/books" icon="search" hint="Search for your next Books ...">
          Search Books
        </app-nav-item>
      </app-sidenav>
      <app-toolbar (openMenu)="openSidenav()">
         Options Search Menu
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppContainer {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
