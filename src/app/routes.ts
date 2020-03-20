import {Routes} from '@angular/router';
import {EventListComponent, EventDetailsComponent, EventDetailsActivatorComponent, CreateEventComponent} from './event/index';
import {Error404Component} from './errors/Error404.component';
import {EventResolver} from './event/shared/event-resolve.service';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';


export const appRoutes: Routes =
  [
    {path: 'event/new', component: CreateEventComponent},
    {path: 'events', component: EventListComponent, resolve: { events: EventResolver}},
    {path: '404', component: Error404Component},
    {path: 'event/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorComponent]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
  ];
