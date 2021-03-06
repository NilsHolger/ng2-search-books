import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>404: Not Found</md-card-title>
      <md-card-content>
        <p>Page requested doesn't exist.</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">Take Me Home</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPageComponent { }