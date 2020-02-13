import { Component } from '@angular/core';

@Component({
  selector: 'events-app-component',
  template: `    
    <nav-component></nav-component>  
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundementals';
}
