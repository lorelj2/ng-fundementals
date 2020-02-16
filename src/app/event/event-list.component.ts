import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { NotificationService } from '../common/notification.service';


@Component({
  selector: "events-list",
  template: `
  <div>
  <h1>Event List</h1>
  <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="notifyEvent(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  notifyEvent(eventName: string){
    this.notificationService.success(eventName, 'Event');
  }

}
