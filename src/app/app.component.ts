import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="app">
      <h1 class="header">Ты сегодня покормил кота?</h1>
      <app-item-list></app-item-list>
  </div>
  `,
  styles: []
})
export class AppComponent {

}
