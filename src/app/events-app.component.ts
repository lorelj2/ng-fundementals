import { Component } from '@angular/core';

@Component({
  selector: 'events-app-component',
  template: `
    <nav-component></nav-component>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundementals';
}
