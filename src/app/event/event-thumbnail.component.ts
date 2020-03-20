import {Component, Input} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/event',event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()"  [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
        <span *ngSwitchDefault> (Normal Start)</span>
        <span *ngSwitchCase="'8:00 am'">(Early start)</span></div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineLocation">Online url: <a [href]="event?.onlineLocation">{{event?.onlineLocation}}</a></div>
    </div>
  `,
  styles: [`


    .bold {
      font-weight: bold;
    }
    .thumbnail {
      min-height: 210px
    }

    .pad-left {
      padding: 10px;
    }

    .well div {
      color: #bbb;
    }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeStyle(): any {
    if (this.event.time === '8:00 am') {
      return { color: 'green', 'font-weight': 'bold'};
    }
    return {};
  }
}
