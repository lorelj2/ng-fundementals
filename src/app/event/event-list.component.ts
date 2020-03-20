import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../common/notification.service';
import {IEvent} from './shared/event.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'events-list',
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
  events: IEvent[];

  constructor(private notificationService: NotificationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

  notifyEvent(eventName: string) {
    this.notificationService.success(eventName, 'Event');
  }

}
