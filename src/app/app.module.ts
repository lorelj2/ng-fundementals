import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from './event/event-list.component';
import {EventThumbnailComponent} from './event/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import { EventService } from './event/shared/event.service';
import { NotificationService } from './common/notification.service';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { CreateEventComponent }  from './event/create-event.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/Error404.component';
import { EventDetailsActivatorComponent } from './event/event-details/event-detail-activator.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService,NotificationService, EventDetailsActivatorComponent]
})
export class AppModule { }
