import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate} from '@angular/router';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventDetailsActivatorComponent implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivate = !!this.eventService.getEvent(+route.params.id);

    if (!canActivate) {
      this.router.navigate(['/404']);
    }
    return canActivate;
  }

  canDeactivate() {

  }

}
