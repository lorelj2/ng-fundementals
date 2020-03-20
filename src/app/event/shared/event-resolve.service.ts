import {Resolve} from '@angular/router';
import {IEvent} from './event.model';
import {EventService} from './event.service';
import {Injectable} from '@angular/core';

@Injectable()
export class EventResolver implements Resolve<IEvent[]> {

  constructor(private eventService: EventService) {
  }

  resolve() {
    return this.eventService.getEvents();
  }
}
