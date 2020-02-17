import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from './event/event-list.component';
import {EventThumbnailComponent} from './event/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import { EventService } from './event/shared/event.service';
import { NotificationService } from './common/notification.service';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService,NotificationService]
})
export class AppModule { }
