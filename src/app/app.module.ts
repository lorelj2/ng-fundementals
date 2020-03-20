import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  EventListComponent,
  EventThumbnailComponent, EventService, EventDetailsComponent, CreateEventComponent, EventDetailsActivatorComponent
} from './event/index';
import {NavbarComponent} from './nav/navbar.component';
import {NotificationService} from './common/notification.service';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {Error404Component} from './errors/Error404.component';
import {EventsAppComponent} from './events-app.component';
import {EventResolver} from './event/shared/event-resolve.service';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {ProfileComponent} from './profile/profile.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService, NotificationService, EventDetailsActivatorComponent, EventResolver, AuthService]
})
export class AppModule {
}
